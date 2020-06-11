'use strict';
module.exports = (req, res, next)=>{
  res.status(404);
  res.statusMassage = 'Resource Not Found';
  res.json({error:'Not Found'});
};