const Round1 = require('../../model/commonNumber/commonNumberRound1')
const Round2 = require('../../model/commonNumber/commonNumberRound2')


const getCommonNumber = async (req, res) => {

    try {
        const round1 = await Round1.find()
        const round2 = await Round2.find()
        res.render("commonNumber/showCommonNumber", {
            docTitle: `CommonNumber`,
            round1,
            round2
        })
    } catch (error) {
        console.log(error)
        req.flash(
            'error_msg',
            error.message
        );
    }

}

//exporting
module.exports = {
    getCommonNumber
}