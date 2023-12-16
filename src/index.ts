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
const mongoose = require('mongoose');

app.use(cors({
  credentials: true, // Fix: Change Credential to credentials
}));
app.use(cookieparser());
app.use(bodyParser.json()); // Fix: Use bodyParser.json() for JSON parsing
app.use(compression());

const PORT = process.env.PORT || 4004; // Use process.env.PORT or a default value

// GQL server setup
async function init() {
    const usersData = [
        {
          id: '1',
          name: 'John Doe',
          username: 'johndoe',
          email: 'john@example.com',
          address: {
            street: '123 Main St',
            city: 'Anytown',
            country: 'USA',
            postalCode: '12345',
          },
          phone: '123-456-7890',
          User: 'user1',
        },
        // Add more user data as needed
      ];
      
  const server = new ApolloServer({
    typeDefs: gql`
      type usersData {
        id: String
        name: String
        username: String
        email: String
        phone: String
        User: String
      }
      type Query {
        getUsers: [usersData]!
      }
    `,
    resolvers: {
        getUsers: () => usersData,
    },
  });

  await server.start();
  app.use('/gql', expressMiddleware(server));

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}
init();

// MongoDB connection
const MONGO_URI = 'mongodb://localhost:27017';
mongoose.Promise = global.Promise;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to the database');
}).catch((err) => {
  console.error('Database connection error:', err);
});
