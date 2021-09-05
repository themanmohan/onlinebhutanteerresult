const express = require('express'),
      Round2 = require('../../controller/commonNumber/commonNumberRound2'),
      router = express.Router(),
     { authorize,isLoggedIn} = require("../../middleware/auth")


router.get('/addround2', isLoggedIn, authorize('admin'), Round2.addRound2)

router.post('/', isLoggedIn, authorize('admin'), Round2.createRound2)

router.delete('/:round2_id/delete', isLoggedIn, authorize('admin'), Round2.deleteRound2)


module.exports = router