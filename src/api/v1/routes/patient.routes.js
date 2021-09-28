const router = require('express').Router();
const { AuthMiddleware, MulterMiddleware } = require('../middlewares')
const { PatientController } = require('../controllers');
const {
    RoleConstant
} = require('../../../../utils/constants');


// router.use(AuthMiddleware.checkAuth)

router.post(
    '/',
    PatientController.getAllPatients
)
module.exports = router;
