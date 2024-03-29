/* eslint-disable max-classes-per-file */
const { MessageConstants, StatusCodesConstants } = require('./constants');

class ApiError extends Error {
    constructor(message, code = StatusCodesConstants.INTERNAL_SERVER_ERROR) {
        super(message);
        this.name = this.constructor.name;

        // Capturing stack trace, excluding constructor call from it.
        Error.captureStackTrace(this, this.constructor);
        this.code = code;
    }
}

class UnauthorizedError extends ApiError {
    constructor(message = MessageConstants.UNAUTHORIZED_ERROR, error = {}) {
        super(message, StatusCodesConstants.UNAUTHORIZED);
        this.error = error;
    }
}

class ForbiddenError extends ApiError {
    constructor(message = MessageConstants.FORBIDDEN, error = {}) {
        super(message, StatusCodesConstants.FORBIDDEN);
        this.error = error;
    }
}

class NotFoundError extends ApiError {
    constructor(message = MessageConstants.NOT_FOUND, error = {}) {
        super(message, StatusCodesConstants.NOT_FOUND);
        this.error = error;
    }
}

class ResourceAlreadyExistError extends ApiError {
    constructor(message = MessageConstants.RESOURCE_EXISTS, error = {}) {
        super(message, StatusCodesConstants.RESOURCE_EXISTS);
        this.error = error;
    }
}

class ValidationError extends ApiError {
    constructor(message = MessageConstants.VALIDATION_ERROR, error = {}) {
        super(message, StatusCodesConstants.UN_PROCESSABLE_ENTITY);
        this.error = error;
    }
}

class InternalServerError extends ApiError {
    constructor(message = MessageConstants.INTERNAL_SERVER_ERROR, error = {}) {
        super(message, StatusCodesConstants.INTERNAL_SERVER_ERROR);
        this.error = error;
    }
}

module.exports = {
    UnauthorizedError,
    ForbiddenError,
    NotFoundError,
    ResourceAlreadyExistError,
    ValidationError,
    InternalServerError
};
