const Round1 = require('../../model/commonNumber/commonNumberRound1')

const addRound1 = async (req, res) => {
    try {
        res.render("commonNumber/addRound1")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}




const createRound1 = async (req, res) => {
    try {
       
        await Round1.create(req.body.round1)
        req.flash(
            'success_msg',
            'created successfully'
        );
        res.redirect("/commonnumber")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}

const deleteRound1 = async (req, res) => {

    try {
        const round1 = await Round1.findById(req.params.round1_id)
        if (!round1) {
            req.flash(
                'success_msg',
                'Round1 Not Found'
            );
            res.redirect("/")
        }
        round1.deleteOne()
         req.flash(
             'success_msg',
             'deleted successfully'
         );
        res.redirect("back")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );

    }
}


//exporting
module.exports = {
    addRound1,
    createRound1,
    deleteRound1
}