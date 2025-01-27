import { Client, cacheExchange, fetchExchange } from "urql";

export const gqlSsrClient = (token?: string) => {
  const Authorization = token ? `Bearer ${token}` : "";

  return new Client({
    url: `http://localhost:${process.env.PORT || "3000"}/graphql`,
    exchanges: [cacheExchange, fetchExchange],
    fetchSubscriptions: true,
    fetchOptions: { headers: { Authorization } },
    requestPolicy: "network-only",
    suspense: true, // await the server to return results ( without this, the extracted data using "ssr.extractData()" will always be empty )
  });
};
