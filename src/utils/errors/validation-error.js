const { StatusCodes } = require('http-status-codes');

class ValidationError extends Error {
    constructor(error) {
        super();

        let explaination = [];
        error.errors.foreach((err) => {
            explaination.push(error.message);
        });

        this.name = 'Validation Error';
        this.message = 'Not able to validate request';
        this.explanation = explaination;
        this.statusCode = StatusCodes.BAD_REQUEST;
    }
}

module.exports = ValidationError;