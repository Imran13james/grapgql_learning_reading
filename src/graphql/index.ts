const { ApolloServer } = require("apollo-server-express");
const {Users} = require("./user/index")
const { queries, mutations } = require("./user/resolvers");
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
      resolvers:{
        Query:{
              ...queries
        },
        Mutation:{
          ...mutations
         
        }
      }
      
    });
    // console.log('Apollo Server setup completed.');
    await server.start() 
    // console.log('Apollo Server started.');
    return server;
  } catch (error) {
    // console.error("Failed to start server:", error);
  }
}

module.exports = iCreatedApploGQLSERVER;
