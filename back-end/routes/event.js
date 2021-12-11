const express = require('express');
const router = express.Router();

const { newEvent, getTodaysEvents, getEvents, getWeekEvents } = require('../controllers/eventController');

const { isAuthenticatedUser } = require('../middlewares/auth');


//Base URL : /api/v1
router.route("/event/new").post(isAuthenticatedUser, newEvent);
router.route("/events").get(isAuthenticatedUser, getEvents);
router.route("/events/today").get(isAuthenticatedUser, getTodaysEvents);
router.route("/events/week").get(isAuthenticatedUser, getWeekEvents);



module.exports = router;
