const express=require("express");

//core module
const path=require('path');
const hostRouter=express.Router();

hostRouter.get("/host/add-home",(req, res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','addHome.html'));
})

hostRouter.post("/host/add-home",(req,res,next)=>{
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','views','regHome.html'))
})

module.exports=hostRouter;