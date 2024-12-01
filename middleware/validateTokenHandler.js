const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt"); // used to encrpyt password
const jwt = require("jsonwebtoken");

//1:22:
const validateToken =asyncHandler(async(req,res,next)=>{
  let token = null;
  let authHeader = req.headers.Authorization || req.headers.authorization;
  if(authHeader && authHeader.startsWith("Bearer") ){
    token =authHeader.split(" ")[1];
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET ,(err , decoded)=>{
      if(err){
        res.status(401);
        throw new Error("User is not authorized");
      }
    })
  }
})