const express = require("express");
const app = express();
const port = 8080;

app.set("view engine", "hbs");

app.get("/", (request, response) => {
  response.render("index.hbs", { variable: "Aca se muestra una variable" });
});

app.listen(port);
