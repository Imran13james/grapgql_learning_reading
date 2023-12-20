const express = require('express');
const http = require('http');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const { ApolloServer } = require('@apollo/server');
const { gql } = require('apollo-server-express');
const { expressMiddleware } = require('@apollo/server/express4');
const { PrismaClient } = require("@prisma/client");

const prismaClient = new PrismaClient();
const PORT = process.env.PORT || 4004; // Use process.env.PORT or a default value
async function Grapql() {
  app.use(cors({
    credentials: true, // Fix: Change Credential to credentials
  }));
  app.use(cookieparser());
  app.use(bodyParser.json()); // Fix: Use bodyParser.json() for JSON parsing
  app.use(compression());
  const resolvers = {
    Query: {
      getUsers: async () => {
        try {
          return [
            {
              id: '2',
              name: 'John Doe',
              username: 'johndoe',
              email: 'john@example.com',
              address: '123 Main St, Anytown',
              phone: '123-456-7890',
              User: 'user1',
            },
          ]
        } catch (error) {
          throw new Error('Error fetching users');
        }
      },
      getBooks: async () => {
        try {
          return [
            {
              userId: '1',
              id: '1',
              title: 'Sample Book 1',
              completed: 'false',
            }
          ]
        } catch (error) {
          throw new Error('Error fetching users');
        }
      },
      GetUsername: async (_, { name }) => {
        try {
          return {
            username: `Hello Dear ${name}`,
          };
        } catch (error) {
          throw new Error('Error fetching username');
        }
      },

    },
    Mutation: {
      async CreateUsers(_, { input }) {
        const { id, firstName, lastName, email, password, salt } = input;
        const createdUser = await prismaClient.Users.create({
          data: { id, firstName, lastName, email, password, salt },
        });
        return createdUser;
      }
    }
  }
  const server = new ApolloServer({
    typeDefs: `#graphql
    type Users {
      id: String
      name: String
      username: String
      email: String
      address: String
      phone: String
      User:String
      
    }
    type Book {
      userId: String
      id: String
      title: String
      completed: String
    }
    type UsernameResponse {
      username: String
    }

    type Query {
      getBooks: [Book!]!
      getUsers:[Users]!    
      GetUsername(name: String): UsernameResponse
    }
    type Mutation {
      CreateUsers(input: UserInput!): Users!
    }
    
      type UserInput {
      id String!
      firstName String!
      lastName String!
      email String!
      password String!
      salt String!
    }
    
    type Users {
      id String @id
      firstName String
      lastName String
      email String
      password String
      salt String
    }
    `,
    resolvers,
  });
  await server.start()
  app.use("/QL", expressMiddleware(server))
  app.listen(PORT, () => {
    console.log(`app is listing on the port ${PORT}`)
  })
}
Grapql()
