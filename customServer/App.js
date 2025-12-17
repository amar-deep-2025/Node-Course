const http = require('http');
const requestHandler = require('./User'); // This must be a function (req, res) => {}

const server = http.createServer(requestHandler); // pass it directly

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
