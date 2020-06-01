'use strict';
const {server} = require('../../lib/server.js');
const supertest = require('supertest');
const mockRequest = supertest(server);

describe('500 testing', ()=>{
  it('should response with 404 on the invalid route', ()=>{
    return mockRequest.get('/yoyyo').then((results)=>{
      expect(results.status).toBe(404);
    });
  });
  it('should response with 404 on the invalid route', ()=>{
    return mockRequest.delete('/products').then((results)=>{
      expect(results.status).toBe(404);
    });
  });
  it('should response with 200 on /products route', ()=>{
    return mockRequest.get('/products').then((results)=>{
      expect(results.status).toBe(200);
    });
  });
  it('should response with 200 on /products route', ()=>{
    return mockRequest.delete('/products/1').then((results)=>{
      expect(results.status).toBe(200);
    });
  });
  it('should response with 200 on /products route', ()=>{
    return mockRequest.put('/products/1').then((results)=>{
      expect(results.status).toBe(200);
    });
  });
  it('should response with 200 on /products route', ()=>{
    return mockRequest.get('/products/1').then((results)=>{
      expect(results.status).toBe(200);
    });
  });
  it('should response with 200 on /products route', ()=>{
    return mockRequest.post('/products').then((results)=>{
      expect(results.status).toBe(200);
    });
  });
  
});