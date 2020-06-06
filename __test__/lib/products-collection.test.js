'use strict';
require('@code-fellows/supergoose');
const products = require('../../lib/models/products/products.collection.js');
const obj= {category:'hello', name:'wow', display_name:'moka', description:'this is good'};

describe('products Models', ()=>{
  it('create', ()=>{
    return products.create(obj).then(results=>{
      Object.keys(obj).forEach(key=>{
        expect(results[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', ()=>{
    return products.get().then(results=>{
      Object.keys(obj).forEach(key=>{
        expect(results[0][key]).toEqual(obj[key]);
      });
    });
  });
  it('update', ()=>{
    let id;
    let newObj = {category:'hhhhhhhhhh', name:'wooooooooooooo', display_name:'mmmmmmmmmmmmmm', description:'jjjjjjjjjj'};
    return products.get().then(results=>{
      // console.log(results[0]);
      id = results[0]._id;
      return products.update(id, newObj).then(newData=>{
        // console.log(newData);
        Object.keys(newObj).forEach((key) => {
          expect(newData[key]).toEqual(newObj[key]);
        });
      });
    });
  });
  it('delete', ()=>{
    let id;
    return products.get().then(results=>{
      // console.log(results[0]);
      id = results[0]._id;
      return products.delete(id).then(newData=>{
        // console.log(newData);
        expect(newData._id).toEqual(id);
   
      });
    });
  });

});
