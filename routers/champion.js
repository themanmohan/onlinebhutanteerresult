const express = require('express'),
      TeerChampion = require('../Controller/champion'),
      router = express.Router(),
      { authorize,isLoggedIn } = require("../middleware/auth");

router.get('/', TeerChampion.getTeerChampion)

router.get('/analytics', TeerChampion.getAnalyticPage)

router.get('/addteerchampion', isLoggedIn, authorize('admin'), TeerChampion.addTeerChampion)

router.post('/', isLoggedIn, authorize('admin'), TeerChampion.createTeerChampion)


router.delete('/:teerchampion_id/delete', isLoggedIn, authorize('admin'), TeerChampion.deleteTeerChampion)


module.exports = router