const router = require('express').Router();
const contactController = require('./controller/contact.controller');
const customerController = require('./controller/customer.controller');

router.use('/contact',contactController);
router.use('/customer',customerController);

module.exports = router;