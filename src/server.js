const jsonServer = require("json-server");
const path = require("path");
require("./writeFileUtil").writeDB();

const server = jsonServer.create();

server.use(jsonServer.defaults());
server.use(jsonServer.router(path.join(__dirname, "../db.json")));
module.exports = {
  startServer: () => {
    try {
      server.listen(process.env.PORT);
      console.log("Listeing on port", process.env.PORT);
    } catch (err) {
      throw new Error("Couldn't start the server");
    }
  },
};
