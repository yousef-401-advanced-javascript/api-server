'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const timeStamp = require('../middleware/timestamp.js');
const logger = require('../middleware/logger.js');
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
const productsRouter = require('../routes/product.js');
const categoriesRouter = require('../routes/categories.js');


// console.log(app);
app.use(express.json());//middleware to add body to the request in post and put
app.use(morgan('dev'));

app.use(timeStamp);//middleware for every routs
app.use(logger);//middleware implement after the timeStmp
app.use('/api/v1',productsRouter);
app.use('/api/v1',categoriesRouter);



app.use('*', error404);
app.use(error500);

module.exports.server = app;
module.exports.start = port=>{
  const PORT = port || 3000;
  app .listen(PORT, ()=> console.log(`listening on port ${PORT}`));
};


// app.get('/',(req, res)=>{
//   console.log('hi');
//   const check = {
//     work: 'yes',
//   };
//   res.json(check);
// });

// let db = [];
// let db2 =[];
// ////////////////////////post method\\\\\\\\\\\\\\\\\\
// app.post('/products', (req, res)=>{
//   const {category, name, description} = req.body;
//   const displayName = req.body['display-name'];
//   const record = {category, name, description};
//   record['display-name'] = displayName;
//   record.id = db.length + 1;
//   db.push (record);
//   res.json(record);
// });
// // app.post('/categories', (req, res)=>{
// //   const {name, description} = req.body;
// //   const displayName = req.body['display-name'];
// //   const record = {name, description};
// //   record['display-name'] = displayName;
// //   record.id = db2.length +1; 
// //   db2.push(record);
// //   res.json(record);
// // });
// //////////////////get method\\\\\\\\\\\\\
// app.get('/products', (req, res)=>{
//   const count = db.length;
//   const results = db;
//   res.json({count, results});
// });
// app.get('/categories', (req, res)=>{
// //   const count = db2.length;
// //   const results = db2;
// //   res.json({count, results});
// // });


// ////////////////get by id\\\\\\\\\\\\\\\
// app.get('/products/:id', (req, res)=>{
//   const id = req.params.id;
//   let hi = db.filter(val=>{
//     if(val.id===Number(id)){
//       return val;
//     }    
//   });
//   res.json(hi[0]);

// });
// // app.get('/categories/:id', (req, res)=>{
// //   const id = req.params.id;
// //   let hi = db2.filter(val=>{
// //     if(val.id===Number(id)){
// //       return val;
// //     }
    
// //   });
// //   res.json(hi[0]);

// // });

// ////////////////delete method\\\\\\\\\\\\\\\\
// app.delete('/products/:id', (req, res)=>{
//   const id = req.params.id;
//   db = db.filter(val=>{
//     return (val.id !== Number(id));
//   });
//   const count = db.length;
//   res.json({count, db});
// });
// // app.delete('/categories/:id', (req, res)=>{
// //   const id = req.params.id;
// //   db2 = db2.filter(val=>{
// //     return (val.id !== Number(id));
// //   });
// //   const count = db2.length;
// //   res.json({count, db2});
// // });
// ////////////////////put method\\\\\\\\\\\\\\\\\\\\\\
// app.put('/products/:id', (req, res)=>{
//   const id = req.params.id;
//   const updateing = req.body;
//   db = db.map(val=>{
//     if(val.id===Number(id)){
//       updateing.id = val.id;
//       return updateing;
//     }
//     return val;
//   });
//   const count = db.length;
//   res.json({count, db});

// });
// app.put('/categories/:id', (req, res)=>{
//   const id = req.params.id;
//   const updateing = req.body;
//   db2 = db2.map(val=>{
//     if(val.id===Number(id)){
//       updateing.id = val.id;
//       return updateing;
//     }
//     return val;
//   });
//   const count = db2.length;
//   res.json({count, db2});

// });



