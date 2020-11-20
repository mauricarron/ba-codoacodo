const express = require("express");
const port = 8080;
const app = express();

// Indico las carpetas donde se almacenan las views / platillas / vistas
app.set("views", "./views");

// Indicar el motor de views a utilizar
app.set("view engine", "pug");

app.get("/", (request, response) => {
  response.render("index.pug", { mensaje: "Mi Web en Pug", nombre: "Sopita" });
});

app.listen(port, () => console.log("Puerto: ", port));
