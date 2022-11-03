import { GraphQLClient } from "graphql-request";

const client = new GraphQLClient(process.env.STRAPI_GRAPHQL_URL);

export default client;
