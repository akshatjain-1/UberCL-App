const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const rideModel = require('../models/ride.model');
const rideController = require('../controllers/ride.controller');
const authMiddleware = require('../middlewares/auth.middleware');

router.post('/create',
    authMiddleware.authUser,
    body('userID').isString().isLength({min: 24, max: 24}).withMessage('Invalid user ID'),
    body('pickup').isString().isLength({min: 3}).withMessage('Invalid pickup location'),
    body('dropoff').isString().isLength({min: 3}).withMessage('Invalid dropoff location'),
    body('vehicleType').isString().isIn(['auto', 'car', 'motorcycle']).withMessage('Invalid vehicle type'),
    rideController.createRide
)


module.exports = router;