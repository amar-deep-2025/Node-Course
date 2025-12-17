const express=require('express');

const bodyParser=require('body-parser');
const app=express();

const PORT=3000;

app.use("/",(req,res,next)=>{
  console.log("First middleWare");
  
  next();
});

app.get("/contact-us",(req,res,next)=>{
  console.log("Handling get Method ",req.url, req.method);
  res.send(`
    <h2>Handling contact form</h2>
    <form action="/contact-us" method="POST">
    <input type="text" name="name" placeholder ="enter your name"/><br><br>
    <input type="email" name="email" placeholder="Enter your email"/><br><br>
    <input type="submit">
    </form>`)
});

app.post("/contact-us", (req,res,next)=>{
  console.log("First handling",req.url,req.method,req.body);
  next();
})

app.use(bodyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("Handling Post method",req.url, req.method,req.body);
  res.send("<h3>We call your as soon as possible!</h3>");
});

app.listen((PORT),()=>{
  console.log(`Server running on address at http://localhost:${PORT}`);
  });