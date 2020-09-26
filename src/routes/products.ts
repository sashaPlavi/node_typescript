import { Router } from 'express';

const productsIndexTemplate = require('../views/products/index');

const router = Router();

router.get('/products', (req, res) => {
  const products = [1, 2, 3, 4, 5];
  res.send(productsIndexTemplate({ products }));
});

module.exports = router;
