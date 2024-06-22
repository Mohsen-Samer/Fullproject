const express = require('express');
const router = express.Router();
const Usercontrollers = require('../Controllers/Usercontrollers');


router.post('/searchflights', Usercontrollers.searchFlights);


router.post('/submit', Usercontrollers.submitcontactForm);


router.post('/submitpay', Usercontrollers.submitpayform);


router.post('/submitstatus', Usercontrollers.searchstatus);

router.post('/submitsignup', Usercontrollers.submitadduserform);

router.post('/submitsignin', Usercontrollers.signInForm);



module.exports = router;