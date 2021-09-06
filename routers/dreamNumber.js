const express = require('express'),
      DreamNumber = require('../controller/dreamNumber'),
      router = express.Router();

router.get('/',  DreamNumber.showDreamNumberPage)

module.exports = router