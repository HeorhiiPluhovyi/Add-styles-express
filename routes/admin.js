const path = require('path');

const express = require('express');
const router = express.Router();

router.use('/add-product', (req, res, next) => {
  console.log('/add-product');
  res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'))
});

router.use('/product', (req, res, next) => {
  console.log('/redirect');
  res.redirect('/')  
});

module.exports = router;
