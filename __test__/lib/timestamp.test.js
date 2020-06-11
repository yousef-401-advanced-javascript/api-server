'use strict';
const loggerMiddleware = require('../../middleware/logger.js');
describe('logger Middleware', () => {
  const req = {};
  const res = {};
  const next = jest.fn();
  const mockFn = jest.fn();
  

 
          
  it('instance new Date', () => {
    const a =new mockFn();
    mockFn.mock.instances[0]===a;  
  });
  it('moves to the next middleware', () => {
    loggerMiddleware(req, res, next);
    expect(next).toHaveBeenCalledWith(); 
  });
});