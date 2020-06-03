'use strict';
const express = require('express');
const getModel = require('../middleware/router-model.js');
// const products = require('../lib/models/products/products.collection.js');
// const categories = require('../lib/models/categories/categories.collection.js');
const router = express.Router();

router.param('model', getModel);


router.get('/:model', getAllHandler);
router.get('/:model/:id', getOneHandler);
router.post('/:model', postAllHandler);
router.put('/:model/:id', putAllHandler);
router.delete('/:model/:id', deleteAllHandler);


//////////////////get  \\\\\\\\\\\\\\\\
function getAllHandler(req, res, next){
  let id = req.params.id;
  req.model.get(id).then(data=>{
    const count = data.length;
    const results = data;
    res.json({count, results});
  }).catch((err) => next(err.message));
  
}
/////////////get by id\\\\\\\\\\\\\
function getOneHandler(req, res, next){
  let id = req.params.id;
  req.model.get(id).then(data=>{
    const count = data.length;
    const results = data;
    res.json({count, results});
  }).catch((err) => next(err.message));
    
}

/////////////////put   create\\\\\\\\\\\\
function postAllHandler(req, res, next){
  req.model.create(req.body)
    .then(data=>{
      res.json(data);
    })
    .catch((err) => next(err.message));
}

////////////////post\\\\\\\\\\\
function putAllHandler(req, res, next){
  const id = req.params.id;
  const updateing = req.body;
  req.model.update(id, updateing).then(data=>{    
    res.json(data);
  }).catch((err) => next(err.message));
}

////////////delete\\\\\\\\\\\\\\\
function deleteAllHandler(req, res, next){
  const id = req.params.id;
  req.model.delete(id).then(data=>{    
    res.json(data);
  }).catch((err) => next(err.message));
}

module.exports = router;