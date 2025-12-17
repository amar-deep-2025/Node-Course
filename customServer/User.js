const fs = require('fs');


const userRequestHandler=(req,res)=>{
  console.log(req.url, req.method);
  if (req.url === '/' && req.method === 'GET') {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>User Input</title></head>');
    res.write('<body>');
    res.write('<h1>Welcome to Home Page</h1>');
    res.write('<form action="/submit-details" method="POST">');
    res.write('<input type="text" name="username" placeholder="Enter Your Name">');
    res.write('<br><br>');
    res.write('<p>Select Your Gender</p>');
    res.write('<label><input type="radio" name="gender" value="male"> Male</label>');
    res.write('<label><input type="radio" name="gender" value="female"> Female</label>');
    res.write('<br><br>');
    res.write('<button type="submit">Submit</button>');
    res.write('</form>');
    res.write('</body>');
    res.write('</html>');
    return res.end();
  }

  // HANDLE POST DATA
  if (req.url.toLowerCase() === '/submit-details' && req.method === 'POST') {
    const body = [];

    req.on('data', chunk => {
      body.push(chunk);
    });

    req.on('end', () => {
      const fullBody = Buffer.concat(body).toString();
      console.log(fullBody);

      const params = new URLSearchParams(fullBody);
      const bodyObject = Object.fromEntries(params.entries());

      // Write to file
      fs.writeFileSync('user.txt', JSON.stringify(bodyObject));
      console.log("Saved to file:", bodyObject);

      // Redirect AFTER writing file
      res.statusCode = 302;
      res.setHeader('Location', '/');
      return res.end();
    });

    return; // Important!
  }
}
module.exports=userRequestHandler
  


