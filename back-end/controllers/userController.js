const mongoose = require('mongoose');
const User = require('../models/user');

//Error Handler for catching async errors separately.
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');

//To get token from the back-end for logged in and registering user
const sendToken = require("../utils/jwttoken");

const ErrorHandler = require('../utils/errorHandler');

//Register user    => /api/v1/user/register
exports.registerUser = catchAsyncErrors (async (req, res, next) => {
  const {name, email, password} = req.body;

  const user = await User.create(req.body);

   sendToken(user ,200 ,res); 
})

//Login user   => /api/v1/user/login
exports.logInUser = catchAsyncErrors( async (req, res, next) => {
    const {username, password} = req.body;
 
    if(!username || !password) {
        return next(new ErrorHandler("Please enter username and password", 400));
    }  

    const user = await User.findOne({username}).select('+password');
    
    if(!user) {
       return next(new ErrorHandler("Invalid username or password",401));
    }

    const isPasswordMatched = await user.comparePassword(password);
    console.log(isPasswordMatched)
    if(!isPasswordMatched){
        return next(new ErrorHandler("Invalid username or password"), 401);
    }

    sendToken(user ,200 ,res); 
})

//Logout user => /api/v1/user/logout
exports.logout = catchAsyncErrors( async (req, res, next) => {
    res.cookie('token', null, {
        expires : new Date(Date.now()),
        httpOnly : true
    })

    res.status(200).json({
        success : true,
        message : "Logged out"
    })
})

//Get specific user's details   /api/v1/user/user-details
exports.getUserDetails = catchAsyncErrors (async (req, res, next) => {
    const username = req.body.username;
    const user = await User.findOne({'username' : username});

    if(!user) {
        return next(new ErrorHandler("Username does not exist",401));
     }

    res.status(200).json({
        success : true,
        user
    })
})

//Get all users' details   /api/v1/users/user-details
exports.getUsers = catchAsyncErrors (async (req, res, next) => {
    const users = await User.find({});
    if(!users) {
        return next(new ErrorHandler("No user found",401));
     }
    res.status(200).json({
        success : true,
        users
    })
})