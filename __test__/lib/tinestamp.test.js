'use strict';
const timeStamp = require('../../middleware/timestamp.js');


describe('timestamp', ()=>{
  const req = {};
  const res = {};
  const next = jest.fn();
  it('return the time ', ()=>{
    timeStamp(req, res, next);
    expect(next).toHaveBeenCalledWith();
  });
});
