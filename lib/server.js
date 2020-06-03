'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const productsRouter = require('../routes/product.js');
const categoriesRouter = require('../routes/categories.js');


// console.log(app);
app.use(express.json());//middleware to add body to the request in post and put

app.use(morgan('dev'));//to show the time and the status
app.use(timeStamp);//middleware for every routs for date of the day
app.use(logger);//middleware implement after the timeStmp to show you some info
app.use('/api/v1',productsRouter);
app.use('/api/v1',categoriesRouter);



app.use('*', error404);
app.use(error500);

module.exports.server = app;
module.exports.start = port=>{
  const PORT = port || 3000;
  app .listen(PORT, ()=> console.log(`listening on port ${PORT}`));
};




