const axios = require('axios');

const { BookingRepository } = require('../repository/index');
const { FLIGHT_SERVICE_PATH } = require('../config/serverConfig');
const { ServiceError } = require('../utils/errors');

class BookingService {
    constructor () {
        this.bookingRepository = new BookingRepository();
    }

    async createBooking(data) {
        try {
            const flightId = data.flightId;
            let getFlightUrl = `${FLIGHT_SERVICE_PATH}/api/v1/flights/${flightId}`;
            const flight = await axios.get(getFlightUrl);
            const flightData = flight.data.data;
            let priceOfTheFlight = flightData.price;
            
            if (data.noOfSeats > flightData.totalSeats) {
                throw new ServiceError(
                    'something went wrong in booking process',
                    'Insufficient seats in the flights'
                );
            }

        } catch (error) {
            throw new ServiceError();
        }

    }
}

module.exports = BookingService;