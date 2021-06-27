const http = require("http");
const cowsay = require("cowsay");

const { port, hostname } = require("./config");

const server = http.createServer((_req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/txt");
  res.end(
    cowsay.say({
      text: "Hola mundo",
      e: "oO",
      T: "U ",
    })
  );
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
