'use strict';
require('dotenv').config();
const mongoose = require('mongoose');
const server = require('./lib/server.js');
// console.log(server);

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser:true,
  useUnifiedTopology:true,
  useFindAndModify:false,
  useCreateIndex:true,
});
server.start(process.env.PORT);
