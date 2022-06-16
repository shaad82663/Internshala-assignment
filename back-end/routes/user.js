const express = require('express');
const router = express.Router();

const { isAuthenticatedUser } = require('../middlewares/auth');
const { registerUser, logInUser, logout, getUsers, getUserDetails} = require('../controllers/userController');

//Base URL : /api/v1
router.route("/user/register").post(registerUser);
router.route("/user/login").post(logInUser);
router.route("/user/logout").get(logout);

router.route("/user/users").get(isAuthenticatedUser, getUsers);

router.route("/user/user-details").get(isAuthenticatedUser, getUserDetails);

module.exports = router;
