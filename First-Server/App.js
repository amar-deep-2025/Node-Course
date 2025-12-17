const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.headers, req.method); // ✅ 'headers' should be lowercase

  if (req.url === '/course') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Node.js</title></head>');
    res.write('<body><h1>Welcome to Node.js</h1></body>');
    res.write('</html>');
    return res.end();
  } else if (req.url === '/about') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Node.js</title></head>');
    res.write('<body><h1>About Page</h1></body>');
    res.write('</html>');
    return res.end();
  }
  else if (req.url === '/products') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Node.js</title></head>');
    res.write('<body><h1>This is products page</h1></body>');
    res.write('</html>');
    return res.end();
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Hello Node.js</title></head>');
    res.write('<body><h1>Try Again! Please give the correct path</h1></body>');
    res.write('</html>');
    return res.end();
  }
});

const PORT = 3000;
server.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
