const express = require('express'),
      CommonNumber = require('../../controller/commonNumber/index'),
      router = express.Router();


router.get('/', CommonNumber.getCommonNumber)

module.exports = router