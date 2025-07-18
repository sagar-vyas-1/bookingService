const { StatusCodes } = require('http-status-codes');

const { Booking } = require('../models/index');
const { AppError, ValidationError } = require('../utils/errors');

class BookingRepository {

    async create(data) {
        try {
            const booking = await Booking.create(data);
            return booking
        } catch (error) {
            if (error.name === 'SequelizeValidationError') {
                throw new ValidationError(error);
            }

            throw new AppError(
                'Repository Error',
                'Cannot create booking',
                'there was some error while creting booking',
                StatusCodes.INTERNAL_SERVER_ERROR
            )
        }
    }
}

module.exports = BookingRepository;