const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const compression = require('compression');
const bodyParser = require('body-parser');
const { ApolloServer } = require('apollo-server-express');
const iCreatedApploGQLSERVER = require('./graphql/index');

const app = express();
const PORT = process.env.PORT || 4004;

async function Graphql() {
  app.use(cors({
    credentials: true,
  }));
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(compression());

  const graphqlServer = await iCreatedApploGQLSERVER();

  // Applying Apollo Server middleware to Express app
  graphqlServer.applyMiddleware({ app, path: '/QL' });

  // Starting the Express server
  app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
  });
}

Graphql();
