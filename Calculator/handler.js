const {sumRequestHandler}=require('./Sum');

const requestHandler=(req,res)=>{
  console.log(req.url,req.method);
  if (req.url==='/'){
    res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
    <head>
       <title>Practice Set</title></head>
    <body>
        <h1>Welcome To Calculator Page</h1>
        <a href="/calculator">Go To Calculator</a>
    </body>
    </html>`);
    return res.end();
  }else if(req.url.toLowerCase()==='/calculator'){
     res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
    <head>
       <title>Calculator</title></head>
    <body>
        <h1>Calculator Page</h1>
        <form action="/calculate-result" method="POST">
        <input type="text" placeholder="first number" name="first"/>
        <br><br>
        <input type="text" placeholder="second number" name="second"/>
        <br><br>
        <input type="submit" value="Sum">
        </form>
    </body>
    </html>`);
    return res.end();
  }else if (req.url.toLowerCase()==='/calculate-result' && req.method==='POST'){
   return sumRequestHandler(req,res);
  }
      res.setHeader('Content-Type','text/html');
    res.write(`
    <html>
    <head>
       <title>Practice Set</title></head>
    <body>
        <h1>404 Not Found Page</h1>
        <a href="/">Go To Home Page</a>
    </body>
    </html>`);
    return res.end();
  }

exports.requestHandler=requestHandler;