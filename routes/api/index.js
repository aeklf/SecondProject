// const router = require('express').Router();
// const driverRoutes = require('./driverRoutes');

// router.use('/home', driverRoutes);

// module.exports = router;

const router = require('express').Router();
const userRoutes = require('./userRoutes');
const serviceRoutes = require('./servicesRoutes');
const employeeRoutes = require('./employeesRoutes');


router.use('/users', userRoutes);
// router.use('/services', serviceRoutes);
// router.use('/employees', employeeRoutes);

module.exports = router;