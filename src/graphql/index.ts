const { ApolloServer } = require("apollo-server-express");
const { Users } = require("./user/index")
async function iCreatedApploGQLSERVER() {
  const resolvers = {
    Query: {
    //  ...Users.resolvers.Query
    },
    Mutation:{
      ...Users.resolvers.Mutation
    }
  }
  try {
    const server = new ApolloServer({
      typeDefs: `#graphql
      type Query {
      hello:String
      }
      type Mutation {
        ${Users.Mutation.createUsers}
      }
      `,
      resolvers,
    });
    await server.start() 
    return server;
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

module.exports = iCreatedApploGQLSERVER;
