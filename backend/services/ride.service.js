const rideModel = require('../models/ride.model');
const mapService = require('./maps.service');

async function getFare(pickup, destination) {
        
    if(!pickup || !destination) {
        throw new Error('Pickup and destination are required');
    }

    const distanceTime = await mapService.getDistanceTime(pickup, destination);

    const BASE_RATES = {
        auto: { base: 20, perKm: 8, perMin: 1 },
        car: { base: 30, perKm: 12, perMin: 2 },
        motorcycle: { base: 15, perKm: 6, perMin: 0.5 }
    };

    const fares = {};
    for (const vehicle in BASE_RATES) {
        const rate = BASE_RATES[vehicle];
        fares[vehicle] = rate.base + 
            (distanceTime.distance * rate.perKm) + 
            (distanceTime.duration * rate.perMin);
    }

    return fares;
}


module.exports.createRide = async ({
    user,
    pickup,
    destination,
    vehicleType
}) => {
    if (!user || !pickup || !destination || !vehicleType) {
        throw new Error('User, pickup, destination and vehicle type are required');
    }

    const fare = await getFare(pickup, destination);

    const ride =  rideModel.create({
        user,
        pickup,
        destination,
        fare: fare[vehicleType],
    });

    return ride;
}



