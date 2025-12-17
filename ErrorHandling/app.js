const http=require('http');
const syntaxTesting=require('./syntaxError');
const runTimeErr=require('./Runtime');
const server=http.createServer((req, res)=>{
  console.log(req.url, req.method);
  syntaxTesting();
  runTimeErr();
});

const PORT=3000;

server.listen((PORT),()=>{
  console.log(`server running at http://localhost:${PORT}`);
});