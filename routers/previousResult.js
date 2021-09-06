const express = require('express'),
      PreviousResult = require('../controller/previousResult'),
      router = express.Router(),
      { authorize,isLoggedIn } = require("../middleware/auth")


router.get('/', PreviousResult.getPreviousResult)

router.post('/search', PreviousResult.getPreviousSearchTeerResult)


router.get('/addpreviousresult', isLoggedIn, authorize('admin'), PreviousResult.addPreviousResult)

router.post('/', isLoggedIn, authorize('admin'), PreviousResult.createPreviousResult)


router.delete('/:previousresult_id/delete', isLoggedIn, authorize('admin'), PreviousResult.deletePreviousResult)


module.exports = router