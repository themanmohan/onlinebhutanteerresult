const express = require('express'),
      router = express.Router();
      Result = require('../model/result')
router.get('/', async (req, res) => {
      
    try {
        const result=await Result.find()
        res.render('Home',{result, docTitle: `CommonNumber`})
    } catch (err) {
        req.flash(
            'error_msg',
            err.message
        );
        res.redirect("/")
    }
})


//exporting
module.exports = router