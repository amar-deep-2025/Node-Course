
const sumRequestHandler=(req,res)=>{
 console.log("In Sum Request Handler ",req.url, req.method);
 const body=[];
 req.on('data',chunk=>{
  body.push(chunk);
  req.on('end',()=>{
    const bodyStr=Buffer.concat(body).toString();
    const params=new URLSearchParams(bodyStr);
    const bodyObj=Object.fromEntries(params.entries(params));
    const result=Number(bodyObj.first)+Number(bodyObj.second);
    console.log(`Result :${result}`);

    res.setHeader('Content-Type','text/html');
    res.write(`
      <html>
          <head>
             <title>Result</title>
          </head>
          <body>
             <h1>Sum of Two number is :${result}</h1>
          </body>
      </html>`);
      return res.end();
  });
 });
}
exports.sumRequestHandler=sumRequestHandler;