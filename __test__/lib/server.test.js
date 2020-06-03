'use strict';
const {server} = require('../../lib/server.js');
// const supertest = require('supertest');
const supergoose = require('@code-fellows/supergoose');

const mockRequest = supergoose(server);

describe('server testing', ()=>{
  it('should response with 404 on the invalid route', ()=>{
    return mockRequest.get('/api/v1/yoyyo').then((results)=>{
      expect(results.status).toBe(404);
    });
  });
  it('should response with 404 on the invalid route', ()=>{
    return mockRequest.delete('/api/v1/products').then((results)=>{
      expect(results.status).toBe(404);
    });
  });
  it('check if can post', ()=>{
    const obj= {category:'hello', name:'wow', display_name:'moka', description:'this is good'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then((results)=>{
        // console.log(results.body);
        const record = results.body;
        Object.keys(obj).forEach(key=>{
          expect(record[key]).toEqual(obj[key]);
        });
      });
  });
  it('check if can delete', ()=>{
    const obj= {category:'hello', name:'wow', display_name:'moka', description:'this is good'};
    let id;
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(results=>{
        return mockRequest
          .get('/api/v1/products')
          .then(data=>{
            id =data.body.results[0]._id;
            return mockRequest
              .delete(`/api/v1/products/${id}`)
              .then(results2=>{
                // console.log(results2.body);
                expect(results2.body._id).toEqual(id);
              });
          });
      });
          
  });
  it('check if can get', ()=>{
    const obj= {category:'hello', name:'wow', display_name:'moka', description:'this is good'};
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(results=>{
        return mockRequest
          .get('/api/v1/products')
          .then(data=>{
            // console.log(data.body.results[0]);
            Object.keys(obj).forEach(key=>{
              expect(data.body.results[0][key]).toEqual(obj[key]);
            });
          });
      });
              
  });
  it('check if can put', ()=>{
    const obj= {category:'hello', name:'wow', display_name:'moka', description:'this is good'};
    const obj2 = {category:'hhhhhhhh', name:'wwwww', display_name:'yyyyy', description:'ttttttt'};
    let id;
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(results=>{
        return mockRequest
          .get('/api/v1/products')
          .then(data=>{
            id =data.body.results[0]._id;
            return mockRequest
              .put(`/api/v1/products/${id}`)
              .send(obj2)
              .then(results2=>{
                expect(results2.body._id).toEqual(id);
              });
          });
      });
  });
  it('check if can get by id', ()=>{
    const obj= {category:'hello', name:'wow', display_name:'moka', description:'this is good'};
    let id;
    return mockRequest
      .post('/api/v1/products')
      .send(obj)
      .then(results=>{
        return mockRequest
          .get('/api/v1/products')
          .then(data=>{
            console.log(results.body);
            id =data.body.results[0]._id;
            return mockRequest
              .get(`/api/v1/products/${id}`)
              .then(results2=>{
                // console.log(results2.body);
                expect(results2.body.results[0]._id).toEqual(id);
              });
          });
      });
  });
  
});