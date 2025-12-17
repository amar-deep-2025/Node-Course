const express=require("express");

const path=require('path');

const myRouter=express.Router();

myRouter.get("/",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','home.html'));
});

module.exports=myRouter;


