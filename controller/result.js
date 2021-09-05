const Result = require('../model/result')



const addResult = async (req, res) => {

    try {
        res.render("result/addResult")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}



const createResult = async (req, res) => {
    try {
        
        data={
            round1:{
                result:req.body.round1result,
                time:req.body.round1time,
            },
            round2:{
                result:req.body.round2result,
                time:req.body.round2time,
            }
        }
       await Result.create(data)
      
        req.flash(
            'success_msg',
            ' Add successfully'
        );
        res.redirect("/")
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}


const deleteResult = async (req, res) => {

    try {
        const result = await Result.findById(req.params.result_id)
        if (!result) {
             req.flash(
                 'error_msg',
                 '  Not Found'
             );
             res.redirect("/")
        }
        result.deleteOne()
         req.flash(
             'success_msg',
             ' Deleted Suucessfully'
         );
        res.redirect("/")
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
    addResult,
    createResult,
    deleteResult
}