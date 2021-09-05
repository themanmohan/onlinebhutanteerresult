const express = require('express'),
      Result = require('../controller/result'),
      router = express.Router(),
      { authorize,isLoggedIn } = require("../middleware/auth");




router.get('/addresult',isLoggedIn,authorize('admin'),  Result.addResult)

router.post('/',isLoggedIn,authorize('admin'), Result.createResult)


router.delete('/:result_id/delete',isLoggedIn,authorize('admin'),  Result.deleteResult)



module.exports = router