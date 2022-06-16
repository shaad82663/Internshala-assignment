const mongoose = require('mongoose');
const Product = require('../models/product');

//Error Handler for catching async errors separately.
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const ErrorHandler = require('../utils/errorHandler');


//Upload Product.    {base address}/product/new
exports.newProduct = catchAsyncErrors (async (req, res, next) => {

    req.body.user = req.user.id;//??

    const product = await Product.create(req.body);

    res.status(201).json({
        success : true,
        product
    })
})

//Fetch product list.  {base address}/products
exports.getProducts = catchAsyncErrors (async (req, res, next) => {

    const count = await Product.countDocuments();

    const products = await Product.find({});  

    if(!products) {
        return next(new ErrorHandler("No product found",401));
     }

    res.status(200).json({
        success : true, 
        count,
        products 
    })
})