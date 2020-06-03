'use strict';
const express = require('express');
const products = require('../lib/models/products/products.collection.js');
const productsRouter = express.Router();




productsRouter.post('/products', postProduct);
productsRouter.get('/products', getProduct);
productsRouter.get('/products/:id', getProduct);
productsRouter.put('/products/:id', updateProduct);
productsRouter.delete('/products/:id', deleteProduct);




////////////////////////post method\\\\\\\\\\\\\\\\\\
function postProduct(req, res,next){
  products.create(req.body)
    .then(data=>{res.json(data);})
    .catch((err) => next(err.message));
}

//////////////////get method\\\\\\\\\\\\\
function getProduct (req, res, next){
  let id = req.params.id;
  products.get(id).then(data=>{
    const count = data.length;
    const results = data;
    res.json({count, results});
  }).catch((err) => next(err.message));
}


////////////////delete method\\\\\\\\\\\\\\\\
function deleteProduct(req, res, next){
  const id = req.params.id;
  products.delete(id).then(data=>{    
    res.json(data);
  }).catch((err) => next(err.message));
}

////////////////////put method\\\\\\\\\\\\\\\\\\\\\\
function updateProduct (req, res, next){
  const id = req.params.id;
  const updateing = req.body;
  products.update(id, updateing).then(data=>{    
    res.json(data);
  }).catch((err) => next(err.message));
}



module.exports = productsRouter;