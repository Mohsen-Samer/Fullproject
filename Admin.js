const express = require('express');
const router1 = express.Router();
const Admincontrollers = require('../Controllers/Admincontrollers');

router1.post('/submitadd', Admincontrollers.submitadduserform);
router1.post('/edituser', Admincontrollers.updateUser);
router1.post('/deleteuser', Admincontrollers.deleteUser);
router1.post('/submitaddflight', Admincontrollers.submitaddflightform);
router1.post('/editflightt', Admincontrollers.updateflight);
router1.post('/deleteflight', Admincontrollers.deleteflight);

module.exports = router1;