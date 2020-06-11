'use strict';
require('dotenv').config();
const server = require('./lib/server.js');
// console.log(server);
server.start(process.env.PORT);
