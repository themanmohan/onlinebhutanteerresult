const express = require('express'),
      PredictTarget = require('../controller/predictTarget'),
      router = express.Router(),
      { authorize,isLoggedIn } = require("../middleware/auth");



router.get('/', PredictTarget.getPredictTargetPage)

router.get('/addpredicttarget',isLoggedIn,authorize('admin'),  PredictTarget.addPredictTarget)

router.post('/',isLoggedIn,authorize('admin'), PredictTarget.createPredictTarget)


// router.delete('/:predicttarget_id/delete',isLoggedIn,authorize('admin'),  PredictTarget.deletePredictTarget)



module.exports = router