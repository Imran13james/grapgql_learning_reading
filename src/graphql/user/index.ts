const { typeDefs } = require("./typedef");
const { Mutation } = require("./Mutation");
const { Query } = require("./queries");
const { resolvers } = require("./resolvers");

export const Users = { typeDefs, Mutation, Query, resolvers };
