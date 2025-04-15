const mongoose = require('mongoose');
const rideModel = require('../models/ride.model');

const rideSchema = new mongoose.Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    captain : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Captain',
        required: true
    },
    pickup : {
        type: String,
        required: true
    },
    destination : {
        type: String,
        required: true
    },
    fare : {
        type: Number,
        required: true
    },
    status : {
        type: String,
        enum: ['pending', 'accepted', 'completed', 'cancelled'],
        default: 'pending'
    },
    duration : {
        type: Number,
       
    },
    distance : {
        type: Number,
       
    },
    rating :{
        type: Number,
    
    },
    paymentID : {
        type: String,
        
    },
    orderID :{
        type: String,
    },
    signature : {
        type: String,
        
    },
})

module.exports = mongoose.model('ride', rideSchema);