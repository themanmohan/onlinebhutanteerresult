const express = require('express'),
      TeerCalender = require('../controller/teerCalender'),
      router = express.Router(),
      { authorize, isLoggedIn } = require("../middleware/auth");

router.get('/', TeerCalender.getTeerCalender)


router.get('/addcalender', isLoggedIn, authorize('admin'), TeerCalender.addTeerCalender)

router.post('/', isLoggedIn, authorize('admin'), TeerCalender.createTeerCalender)


router.delete('/:teercalender_id/delete', isLoggedIn, authorize('admin'), TeerCalender.deleteTeerCalender)


module.exports = router