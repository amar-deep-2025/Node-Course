const http = require('http');
const requestHandler=require('./User');
const server = http.createServer((requestHandler) => {
  console.log(req.url, req.method);
});
  const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
