const http = require('http');


const server = http.createServer((req, res) =>{
  console.log(req.url, req.headers, req.method);
  console.log("Hello chapter 7");
}); // pass it directly

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
