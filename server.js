const express = require("express");
const cors = require("cors");
const app = express();

const dotenv = require("dotenv");

// Swagger dependencies
const swaggerJSDoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");


dotenv.config();

var corsOptions = {
  origin: process.env.CORS_ORIGIN || "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to nodejs application." });
});

// Swagger setup
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "NodeJS Swagger API",
        version: "1.0.0",
        description: "API documentation for your NodeJS application",
      },
    },
    apis: ["./app/routes/*.js"], // Specify the path to your route files
  };
  
  const swaggerSpec = swaggerJSDoc(swaggerOptions);
  app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));
  
require("./app/routes/tutorial.routes.js")(app);

// set port, listen for requests

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
