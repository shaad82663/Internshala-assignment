const express = require('express');
const router = express.Router();

const { newProduct, getProducts} = require('../controllers/productController');

const { isAuthenticatedUser } = require('../middlewares/auth');


//Base URL : /api/v1
router.route("/product/new").post(isAuthenticatedUser, newProduct);
router.route("/products").get(isAuthenticatedUser, getProducts);


module.exports = router;
