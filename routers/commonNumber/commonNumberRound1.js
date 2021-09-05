const express = require('express'),
      Round1 = require('../../controller/commonNumber/commonNumberRound1'),
      router = express.Router(),
     { authorize,isLoggedIn} = require("../../middleware/auth")


router.get('/addround1', isLoggedIn, authorize('admin'), Round1.addRound1)

router.post('/', isLoggedIn, authorize('admin'), Round1.createRound1)

router.delete('/:round1_id/delete', isLoggedIn, authorize('admin'), Round1.deleteRound1)


module.exports = router