const Sequelize = require('sequelize');
const moment = require('moment');
const bcrypt = require('bcryptjs');
const {
    User,


    

} = require('../../../../db/models');
const {
    StatusesConstants,
    MessageConstants,
    RoleConstant
} = require('../../../../utils/constants');
const {
    ApiError,
    Chalk,
    Response
} = require('../../../../utils');


const { Op } = Sequelize;

const PatientService = {
    /**
     * Get All Patient
     */
    getAllPatients: () => {
        return User.findAndCountAll()
    },
    /**
      * Get All Patient By Service Provider
      */
    
};


module.exports = PatientService;
