'use strict';
/**
 * A module that return the time
 * 
 * @module timeStamp
 * @param req
 * @param res
 * @param next
 */
/**timeStamp. */
module.exports = (req,res,next)=>{
  req.requestTime = new Date().toDateString();//adding new value with requestTime key in the request that in the route
  next();
};