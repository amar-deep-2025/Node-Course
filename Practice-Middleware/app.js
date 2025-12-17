const express=require("express");

const path=require('path');


const contactRouter=require('./routes/contactRouter');
const Routers=require('./routes/Routers');

const app=express();


app.use((req,res,next)=>{
  console.log("First dummy Middleware ",req.url,req.method);
  next();
});


app.use(express.urlencoded());

app.use(Routers);
app.use(contactRouter);

app.use((req,res,next)=>{
  res.sendFile(path.join(__dirname,'views','404.html'));
})

const PORT=3000;
app.listen((PORT),()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
});


