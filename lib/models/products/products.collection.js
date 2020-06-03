'use strict';

const productsSchema = require('./products.schema.js');
const Model = require('../model.js');

class Products extends Model{
    
  constructor(){
    //   console.log(productsSchema);
    super(productsSchema);
  }
}

module.exports = new Products();