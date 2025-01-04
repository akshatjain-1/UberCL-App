const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

router.post('/register', [
    body('email').isEmail().withMessage('Invalid Email'),
    body('fullname.firstname').isLength({min : 3}).withMessage('First name must be atleast 3 characters '),
    body('password').isLength({min : 8}).withMessage('Password must be atleast 8 characters'),
    body('vehicle.color').isLength({min : 3}).withMessage('Color must be atleast 3 characters'),
    body('vehicle.plate').isLength({min : 3}).withMessage('Color must be atleast 3 characters'),
    body('vehicle.capacity').isLength({min : 1}).withMessage('Color must be atleast 3 characters'),
    body('vehicle.vehicleType').isIn(['car', 'motrcycle' , 'auto']).withMessage('Invalid Vehicle type')

],

    captainController.registerCaptain
)


module.exports = router ; 