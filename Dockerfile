FROM node:alpine as build
WORKDIR /usr/src/app

COPY . .

RUN npm i
RUN npm run build

FROM node:alpine
WORKDIR /usr/src/app

COPY --from=build /usr/src/app/node_modules /usr/src/app/node_modules
COPY --from=build /usr/src/app/package.json /usr/src/app/package.json

COPY --from=build /usr/src/app/schema.prisma /usr/src/app/schema.prisma

COPY --from=build /usr/src/app/build /usr/src/app/build
COPY --from=build /usr/src/app/server.js /usr/src/app/server.js

CMD ["node", "server.js"]
