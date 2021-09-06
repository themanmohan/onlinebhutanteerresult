const Round2 = require('../../model/commonNumber/commonNumberRound2')

const addRound2 = async (req, res) => {
    try {
        res.render("commonNumber/addRound2",{ docTitle: `Add CommonNumber Round2`,})
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
    }
}




const createRound2 = async (req, res) => {
    try {
       
        await Round2.create(req.body.round2)
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

const deleteRound2 = async (req, res) => {

    try {
        const round2 = await Round2.findById(req.params.round2_id)
        if (!round2) {
            req.flash(
                'success_msg',
                'Round2 Not Found'
            );
            res.redirect("/")
        }
        round2.deleteOne()
         req.flash(
             'success_msg',
             'deleted successfully'
         );
        res.redirect("/commonnumber")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );

    }
}


//exporting
module.exports = {
    addRound2,
    createRound2,
    deleteRound2
}