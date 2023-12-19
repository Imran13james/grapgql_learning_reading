const { ApolloServer } = require("apollo-server-express");
const {Users} = require("./user/index")
const resolvers = require("./user/resolvers"); // Import the resolvers
async function iCreatedApploGQLSERVER() {
  try {
    const server = new ApolloServer({
      typeDefs: `
      ${Users.typeDefs}
      type Query {
      ${Users.Query}
      }
      type Mutation {
        ${Users.Mutation}
     }
      `,
      resolvers
    });
    await server.start() 
    return server;
  } catch (error) {
    console.error("Failed to start server:", error);
  }
}

module.exports = iCreatedApploGQLSERVER;
