import express, { ErrorRequestHandler, RequestHandler } from "express";

import { postgraphile } from "postgraphile";

import { config } from "dotenv";
import { expressjwt } from "express-jwt";
import jwt from "jsonwebtoken";
import JwksRsa, { GetVerificationKey } from "jwks-rsa";
import { pgOptions, pgPool, pgSchema } from "./postgraphile";

config();

const JWKSSecret = JwksRsa.expressJwtSecret({
  cache: true,
  rateLimit: true,
  jwksRequestsPerMinute: 5,
  jwksUri: process.env.JWKS_URI!,
});

const checkJwt = expressjwt({
  secret: JWKSSecret as GetVerificationKey,
  algorithms: ["HS256", "RS256"],
});

const checkSystemToken = expressjwt({
  secret: process.env.JWT_SECRET_SYSTEM!,
  algorithms: ["HS256"],
});

const authMiddleware: RequestHandler = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) return next();

  const decToken = jwt.decode(token.replace(/bearer /i, "")) as jwt.JwtPayload;

  if (decToken.iss === "system") return checkSystemToken(req, res, next);
  else return checkJwt(req, res, next);
};

const authErrHandler: ErrorRequestHandler = (err, _req, res, _next): any => {
  if (err.name === "UnauthorizedError") {
    res.status(err.status).json({ errors: [{ message: err.message }] });
    res.end();
  }
};

const app = express.Router();

app.use("/graphql", authMiddleware);
app.use("/graphql", authErrHandler);

const isProd = process.env.NODE_ENV === "production";

const postgraphileMiddleware = postgraphile(pgPool, pgSchema, {
  ...pgOptions,
  // enableCors: true,
  watchPg: !isProd,
  enhanceGraphiql: !isProd,
  allowExplain: !isProd,
  pgSettings: (req) => ({
    role:
      (req as any).auth?.role || ((req as any).auth?.sub ? "reg_user" : "anon"),
    "jwt.claims.role":
      (req as any).auth?.role || ((req as any).auth?.sub ? "reg_user" : "anon"),
    "jwt.claims.sub": (req as any).auth?.sub,
    "jwt.claims.user_id": (req as any).auth?.sub,
  }),
  async additionalGraphQLContextFromRequest(req) {
    return {
      auth: (req as any).auth,
    };
  },
  websocketMiddlewares: [authMiddleware],
  retryOnInitFail: true,
  websocketOperations: "all",
  enableQueryBatching: true,
  graphqlRoute: "/graphql",
  graphiql: !isProd,
  graphiqlRoute: isProd ? undefined : "/graphql/play",
});

app.use(postgraphileMiddleware);

app.get("/graphql/healthz", async (_req, res) => {
  const health = await Promise.race([
    // timeout after 3 seconds
    new Promise((resolve) => setTimeout(resolve, 3000)).then(() => ({
      ok: false,
      errors: ["ETIMEDOUT"],
    })),

    // check health
    Promise.all([
      // check postgres schema health

      postgraphileMiddleware
        .getGraphQLSchema()
        .then(() => ({
          ok: true,
          errors: [],
        }))
        .catch((e) => ({
          ok: false,
          errors: [{ ...e, src: "main database" }],
        })),
    ])
      // join the health results
      .then((h) =>
        h.reduce(
          (init, res) => ({
            ok: init.ok && res.ok,
            errors: [...init.errors, ...res.errors],
          }),
          { ok: true, errors: [] },
        ),
      ),
  ]);

  res.status(health.ok ? 200 : 500).json(health);
});

export default app;
