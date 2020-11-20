const express = require("express");
const fs = require("fs");

const app = express();
const archivo = fs.readFileSync("index.html");

app.get("/", (request, response) => {
  response.send("Hola, Home Page");
});

app.get("/about", (request, response) => {
  response.write(archivo);
  response.send();
});

app.listen(8080);
