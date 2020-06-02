'use strict';

const express = require('express');
const categories = require('../lib/models/categories/categories.collection.js');
const categoriesRouter = express.Router();


categoriesRouter.post('/categories', postCategories);
categoriesRouter.get('/categories', getCategories);
categoriesRouter.get('/categories/:id', getCategories);
categoriesRouter.put('/categories/:id', updateCategories);
categoriesRouter.delete('/categories/:id', deleteCategories);




////////////////////////post method\\\\\\\\\\\\\\\\\\
function postCategories(req, res,next){
  categories.create(req.body)
    .then(data=>{
      res.json(data);
    })
    .catch((err) => next(err.message));
    
}

//////////////////get method\\\\\\\\\\\\\
function getCategories (req, res, next){
  let id = req.params.id;
  categories.get(id).then(data=>{
    const count = data.length;
    const results = data;
    res.json({count, results});
  }).catch((err) => next(err.message));
}


////////////////delete method\\\\\\\\\\\\\\\\
function deleteCategories(req, res, next){
  const id = req.params.id;
  categories.delete(id).then(data=>{    
    res.json(data);
  }).catch((err) => next(err.message));
}

////////////////////put method\\\\\\\\\\\\\\\\\\\\\\
function updateCategories (req, res, next){
  const id = req.params.id;
  const updateing = req.body;
  categories.update(id, updateing).then(data=>{    
    res.json(data);
  }).catch((err) => next(err.message));
}






module.exports = categoriesRouter;
