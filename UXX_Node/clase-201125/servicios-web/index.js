const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 8080;

const app = express();
app.use(bodyParser.json());

const connection = mysql.createConnection({
  host: "186.19.155.140",
  user: "testing2019",
  password: "codoacodo",
  database: "personas",
  port: "3306",
});

app.get("/", (request, response) => {
  response.send("Bienvenido al servidor de Codo a Codo BA");
});

app.get("/listado", (request, response) => {
  const sql = "SELECT * FROM datos";
  connection.query(sql, (error, resultado) => {
    if (error) throw error;
    if (resultado.length > 0) {
      response.json(resultado);
    } else {
      response.send("No se encontraron registros.");
    }
  });
});

app.listen(PORT, () => console.log(`Servidor corriendo en puerto: ${PORT}`));
