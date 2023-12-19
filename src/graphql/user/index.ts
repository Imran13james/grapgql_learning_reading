const { typeDefs } = require("./typedef");
const { Mutation } = require("./Mutation");
const { Queries } = require("./queries");
const { resolvers } = require("./resolvers");
export const Users = { typeDefs, Mutation, Queries, resolvers }