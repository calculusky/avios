const express = require('express');
const router = express.Router();
const { addProduct, getProducts, updateProduct, getProduct, deleteVariety } = require('../controllers/product');

router.post('/add-product', addProduct);
router.get('/get-products', getProducts);
router.get('/get-product/:productId', getProduct);
router.put('/update-product', updateProduct);
router.delete('/delete-variety', deleteVariety);

module.exports = router;