
const showDreamNumberPage = async (req, res) => {
    try {
        res.render("dreamNumber",{docTitle: `DreamNumber`})
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
    showDreamNumberPage,
}