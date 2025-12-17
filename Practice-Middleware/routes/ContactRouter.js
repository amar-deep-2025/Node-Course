const express=require('express');

const path=require('path');

const contactRouter=express.Router();

contactRouter.get("/contact-us",(req,res,next)=>{
  res.sendFile(path.join(__dirname,'../','views','contact.html'));
});

contactRouter.post("/contact-us",(req,res,next)=>{
  console.log(req.body);
  res.sendFile(path.join(__dirname,'../','views','Handle-contact.html'));
});

module.exports=contactRouter;