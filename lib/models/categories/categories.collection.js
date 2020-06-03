'use strict';
const categoriesSchema = require('./categories.schema.js');
const Model = require('../model.js');

class Products extends Model{
    
  constructor(){
    super(categoriesSchema);
  }
}

module.exports = new Products();