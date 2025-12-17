const express=require("express");

//Local Module
const userRouter=require("./routes/userRouters");

const hostRouter=require("./routes/hostRouters");


const app=express();

app.use((req,res,next)=>{
  console.log("First middleWare");
  next();
})

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

const PORT=3000;

app.listen((PORT),()=>{
  console.log(`Server running on address http://localhost:${PORT}`);
})