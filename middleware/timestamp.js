'use strict';
module.exports = (req,res,next)=>{
  req.requestTime = new Date().toDateString();//adding new value with requestTime key in the request that in the route
  next();
};