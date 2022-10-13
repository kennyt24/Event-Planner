const express = require('express');
const router = express.Router();

const express = require('express');
const { createbooking } = require('../controller/Booking.controller');


router.post('/bookevent',createbooking);

module.exports = router;
