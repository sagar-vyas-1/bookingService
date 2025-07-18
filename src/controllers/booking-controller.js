const { StatusCodes } = require('http-status-codes');

const { BookindService } = require('../services/index');

const bookingService = new BookindService();

const create = async (req, res) => {
    try {
        const response = await bookingService.createBooking(req.body);
        return res.status(StatusCodes.OK).json({
            data: response,
            success: true,
            message: 'Successfullt completed booking',
            error: {}
        });
    } catch (error) {
        return res.status(error.statusCode).json({
            data: {},
            success: false,
            message: error.message,
            error: error.explaination,
        });
    }
}

module.exports = {
    create
}