'use strict';
module.exports = (request, response, next)=>{
  console.log('the method', request.method, ' ,the path', request.path, ' ,the time', request.requestTime);//the requsetTime defined because the tome stamp middleware is impleminteng befrore
  next();
};