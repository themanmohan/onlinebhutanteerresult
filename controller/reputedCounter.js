const ReputedCounter = require('../model/reputrdCounter')


const getReputedCounter = async (req, res) => {

    try {

        const reputedcounter = await ReputedCounter.find()
        res.render("ReputedCounter/ShowReputedCounter", {
            docTitle: `ReputedCounter`,
            reputedcounter
        })
    } catch (error) {
      
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}

const addReputedCounter = async (req, res) => {

    try {
     res.render("ReputedCounter/AddReputedCounter",{ docTitle: `Add ReputedCounter`})

    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}



const createReputedCounter = async (req, res) => {

    try {
         await ReputedCounter.create(req.body.reputedcounter)
         req.flash(
             'success_msg',
             ' Added successfully'
         );
        res.redirect("/reputedcounter")
       
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}

const deleteReputedCounter = async (req, res) => {

    try {
        const foundreputedcounter = await ReputedCounter.findById(req.params.reputedcounter_id)
        if (!foundreputedcounter) {
            req.flash(
                'success_msg',
                '  Not Found'
            );
            res.redirect("/")
        }
        foundreputedcounter.deleteOne()
         req.flash(
             'success_msg',
             ' delete successfully'
         );
        res.redirect("/reputedcounter")
    } catch (error) {
         req.flash(
             'error_msg',
             error.message
         );
         res.redirect("/")

    }
}

//exporting
module.exports = {
    getReputedCounter,
    addReputedCounter,
    createReputedCounter,
    deleteReputedCounter
}