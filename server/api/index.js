// require the express npm module, added to the project using "npm install express"
require("dotenv").config();

// require the express npm module, needs to be added to the project using "npm install express"
const express = require('express');
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());

// configures server to execute a function for every GET request to "/"
// the second argument passed to the .get() method is the "Route Handler Function"
// the route handler function will run on every GET request to "/"
server.get("/", (req, res) => {
  // express will pass the request and response objects to this function
  // the .send() on the response object can be used to send a response to the client
  res.send("Hello World");
});

module.exports = server;
