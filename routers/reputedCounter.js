const express = require('express'),
      ReputedCounter = require('../Controller/ReputedCounter'),
      router = express.Router(),
      { authorize,isLoggedIn } = require("../middleware/auth");


router.get('/', ReputedCounter.getReputedCounter)

router.get('/addreputedcounter', isLoggedIn, authorize('admin'), ReputedCounter.addReputedCounter)

router.post('/', isLoggedIn, authorize('admin'), ReputedCounter.createReputedCounter)


router.delete('/:reputedcounter_id/delete', isLoggedIn, authorize('admin'), ReputedCounter.deleteReputedCounter)

//exporting
module.exports = router