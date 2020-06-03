'use strict';
require('@code-fellows/supergoose');
const categories = require('../../lib/models/categories/categories.collection.js');
const obj= { name:'yousef', display_name:'moka', description:'moka moka de de de deee'};

describe('categories Models', ()=>{
  it('create', ()=>{
    return categories.create(obj).then(results=>{
      Object.keys(obj).forEach(key=>{
        expect(results[key]).toEqual(obj[key]);
      });
    });
  });
  it('get', ()=>{
    return categories.get().then(results=>{
      Object.keys(obj).forEach(key=>{
        expect(results[0][key]).toEqual(obj[key]);
      });
    });
  });
  it('update', ()=>{
    let id;
    let newObj = {name:'jojo', display_name:'lolo', description:'bobo'};
    return categories.get().then(results=>{
      id = results[0]._id;
      return categories.update(id, newObj).then(newData=>{
        Object.keys(newObj).forEach((key) => {
          expect(newData[key]).toEqual(newObj[key]);
        });
      });
    });
  });
  it('delete', ()=>{
    let id;
    return categories.get().then(results=>{
      id = results[0]._id;
      return categories.delete(id).then(newData=>{
        expect(newData._id).toEqual(id);
   
      });
    });
  });

});
