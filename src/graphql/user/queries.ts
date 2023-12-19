const { typeDefs } = require("./typedef");

export const Queries = `#graphql
${typeDefs}
  type Query {
    getBooks:[Book]!
}
`;
