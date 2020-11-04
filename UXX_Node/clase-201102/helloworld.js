const http = require("http");

const mensajes = (solicitud, respuesta) => {
  respuesta.write("Hola Mundo!");
  respuesta.end("Chau!");
  console.log("test");
};

const servidor = http.createServer(mensajes);
servidor.listen(8080);
