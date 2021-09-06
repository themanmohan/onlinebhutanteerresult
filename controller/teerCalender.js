const TeerCalender = require('../model/teerCalender');


const getTeerCalender = async (req, res) => {
    try {

        const teercalender = await TeerCalender.find()
        res.render("teerCalender/ShowTeerCalender", {
            docTitle: `TeerCalender`,
            teercalender
        })
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}

const addTeerCalender = async (req, res) => {
    try {
        res.render("teerCalender/addTeerCalender",{ docTitle: `Add TeerCalender`,})
    } catch (error) {
        
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}



const createTeerCalender = async (req, res) => {

    try {
        
        await TeerCalender.create(req.body.teercalender)
        
        req.flash(
            'success_msg',
            'Calender created successfully'
        );
        res.redirect("/teercalender")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}

const deleteTeerCalender = async (req, res) => {

    try {
        const foundteercalender = await TeerCalender.findById(req.params.teercalender_id)
        if (!foundteercalender) {
             req.flash(
                 'success_msg',
                 '  Not Found'
             );
             res.redirect("/")
        }
        foundteercalender.deleteOne()
         req.flash(
             'success_msg',
             ' delete successfully'
         );
        res.redirect("/teercalender")
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
    createTeerCalender,
    getTeerCalender,
    addTeerCalender,
    deleteTeerCalender
}