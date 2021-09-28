const bcrypt = require('bcryptjs');
const moment = require('moment');
const passwordComplexity = require("joi-password-complexity");
const {
    ApiError,
    Response,
    Chalk
} = require('../../../../utils');
const {
    MessageConstants,
    StatusCodesConstants,
    StatusesConstants,
    QueryConstants,
    RoleConstant
} = require('../../../../utils/constants');
const {
    PatientService
} = require('../services');
const { CommonValidationSchema } = require('../../../../db/validations');
const Joi = require('joi');

module.exports = {

    /**
     * Get All Patient
     */
    getAllPatients: async (req, res) => {
        try {
            const patients = await PatientService.getAllPatients();
            return res.status(StatusCodesConstants.SUCCESS).json(Response.sendSuccess(
                MessageConstants.PATIENT_FETCHED_SUCCESSFULLY,
                patients,
                StatusCodesConstants.SUCCESS
            ));
        } catch ({ message, code = StatusCodesConstants.INTERNAL_SERVER_ERROR, error = {} }) {
            Chalk.error(message, { message, code, error });
            return res.status(code).json(Response.sendError(
                message,
                error,
                code
            ));
        }
    },

    
}