const express = require('express');
const http = require('http');
const cookieparser = require('cookie-parser');
const cors = require('cors');
const app = express();
const compression = require('compression');
const bodyParser = require('body-parser');
const iCreatedApploGQLSERVER = require('./graphql/index')
const PORT = process.env.PORT || 4004; // Use process.env.PORT or a default value

async function Grapql() {
  app.use(cors({
    credentials: true, // Fix: Change Credential to credentials
  }));
  app.use(cookieparser());
  app.use(bodyParser.json()); // Fix: Use bodyParser.json() for JSON parsing
  app.use(compression());
  const GrapqlSErver = await iCreatedApploGQLSERVER()
  GrapqlSErver.applyMiddleware({ app, path: '/QL' }) // Use applyMiddleware method
  app.listen(PORT, () => {
    console.log(`app is listing on the port ${PORT}`)
  })
}
Grapql()
