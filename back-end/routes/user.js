const express = require('express');
const router = express.Router();

const { isAuthenticatedUser } = require('../middlewares/auth');
const { registerUser, logInUser, logout, getUsers, getUserDetails} = require('../controllers/userController');

//Base URL : /api/v1
router.route("/register").post(registerUser);
router.route("/login").post(logInUser);
router.route("/logout").get(logout);

router.route("/users").get(isAuthenticatedUser, getUsers);

router.route("/user-details").get(isAuthenticatedUser, getUserDetails);

module.exports = router;