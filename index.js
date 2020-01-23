const server = require("./data/api/server");

const port = process.env.PORT || 4000;

server.listen(port, () => {
  console.log(`\n Server listening on http://localhost:${port} \n`);
});
