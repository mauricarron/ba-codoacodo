const http = require("http");
const fs = require("fs");
const hostname = "localhost";
const port = 8080;

// SINCRONO
const mihtml = fs.readFileSync("index.html");

console.log("1");
http
  .createServer((request, response) => {
    console.log("2");
    response.write(mihtml);
    response.end();
    console.log("3");
  })
  .listen(port, hostname, () => {
    console.log("4");
  });
console.log(`Server en: ${hostname}:${port}`);

// ASINCRONO
// http
//   .createServer((request, response) => {
//     console.log("1");
//     fs.readFile("index.html", (error, mihtml) => {
//       response.write(mihtml);
//       console.log("2");
//       response.end();
//     });
//     console.log("3");
//   })
//   .listen(8080);
