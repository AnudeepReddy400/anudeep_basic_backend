const jwt = require('jsonwebtoken');
const { StatusCodesConstants, MessageConstants } = require('../../../../utils/constants');
const { Response, Crypto } = require('../../../../utils');

module.exports = {

    /**
     * Check the authentication
     */
    checkAuth: async (req, res, next) => {
        try {
            const token = req.headers.authorization.split(' ').pop().trim();
            
            // const { data: hashInfo } = jwt.verify(token, process.env.JWT_SECRET_KEY);
            // const userInfo = JSON.parse(Crypto.decrypt(hashInfo));
            const result = jwt.verify(token, process.env.JWT_SECRET_KEY);
            req.userInfo = { 
                                id : result.sub,
                                role : result.role,
                                firstName:result.first_name,
                                lastName:result.last_name
                             };
            return next();
        } catch (error) {
            return res.status(StatusCodesConstants.UNAUTHORIZED).json(Response.sendError(
                MessageConstants.UNAUTHORIZED_ERROR,
                {},
                StatusCodesConstants.UNAUTHORIZED
            ));
        }
    },

     /**
     * Check if the user role is authenticated
     * Must be called after checkAuth middleware
     * so that user info can be available
     */

    checkAuthforPatient: (roles) => (req, res, next) => {

        if (req.userInfo.role == 5) {
            return next();
        }
        
        return res.status(StatusCodesConstants.UNAUTHORIZED).json(Response.sendError(
            MessageConstants.UNAUTHORIZED_ERROR,
            {},
            StatusCodesConstants.UNAUTHORIZED
        ));
    },
    checkAuthforProvider: () => (req, res, next) => {
        if (req.userInfo.role == 3 || req.userInfo.role == 4) {
            return next();
        }
        
        return res.status(StatusCodesConstants.UNAUTHORIZED).json(Response.sendError(
            MessageConstants.UNAUTHORIZED_ERROR,
            {},
            StatusCodesConstants.UNAUTHORIZED
        ));
    },
    checkAuthforClinic: () => (req, res, next) => {
        if (req.userInfo.role == 6) {
            return next();
        }
        
        return res.status(StatusCodesConstants.UNAUTHORIZED).json(Response.sendError(
            MessageConstants.UNAUTHORIZED_ERROR,
            {},
            StatusCodesConstants.UNAUTHORIZED
        ));
    },

    checkAuthforSurgeon: () => (req, res, next) => {
        if (req.userInfo.role == 2) {
            return next();
        }
        
        return res.status(StatusCodesConstants.UNAUTHORIZED).json(Response.sendError(
            MessageConstants.UNAUTHORIZED_ERROR,
            {},
            StatusCodesConstants.UNAUTHORIZED
        ));
    },
};
