const PreviousResult = require('../model/previousResult')

const getPreviousResult =  async(req, res) => {

    const page=parseInt(req.query.page)

    const limit=parseInt(req.query.limit)

    const startIndex=(page-1)*limit

    const endIndex=page*limit;

    let result={}

    

    if(startIndex>0){
        result.previous={
            page:page-1,
            limit:limit,
        }
    }

   const previousresultlength= await PreviousResult.find()
     
   if(!previousresultlength){
            req.flash(
                        'error_msg',
                        err.message
                    );
                    res.redirect("/")
                  }
          
   
   result.count = Math.ceil(previousresultlength.length/limit)
    if(endIndex<previousresultlength.length){
        result.next={
            page:page+1,
            limit:limit,
        }
    }

    

 result.previousresult= await PreviousResult.find({}).limit(limit).skip(startIndex).sort([['date', -1]]).exec()
 res.render("previousResult/showPreviousResult", {
    result,
    docTitle:`Previous Result`
   });


}

const getPreviousSearchTeerResult =  async(req, res) => {
    try{
     if(!req.body.startdate && !req.body.enddate){
         req.flash(
             'error_msg',
             `please provide starting and ending date`
         );
         res.redirect("/previousresult")
     }
     let result={}
      
   result.previousresult=await  PreviousResult.find({
         date: {
          $gte: req.body.startdate,
          $lt: req.body.enddate
         }
        })

        res.render("previousResult/showPreviousResult", {
            result,
            docTitle:`Previous Search  Result`
             })
    }catch(error){
     req.flash(
         'error_msg',
         error.message
     );
     res.redirect("/")
    }
 }

const addPreviousResult = async (req, res) => {

    try {
        res.render("previousResult/addPreviousResult",{docTitle:`Add Previous Result`})
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")
    }
}



const createPreviousResult = async (req, res) => {

    try {
        
        await PreviousResult.create(req.body.previousresult)
         req.flash(
             'success_msg',
             'Day Result   created successfully'
         );
        res.redirect("/previousresult")
       
    } catch (error) {
       req.flash(
           'error_msg',
           error.message
       );
       res.redirect("/")
    }
}

const deletePreviousResult = async (req, res) => {

    try {
        const foundpreviousresult = await PreviousResult.findById(req.params.previousresult_id)
        if (!foundpreviousresult) {
           req.flash(
               'success_msg',
               'Not Found'
           );
           res.redirect("/")
        }
        foundpreviousresult.deleteOne()
         req.flash(
             'success_msg',
             'delete successfully'
         );
        res.redirect("back")
    } catch (error) {
        req.flash(
            'error_msg',
            error.message
        );
        res.redirect("/")

    }
}

// //exporting
module.exports = {
     getPreviousResult,
     addPreviousResult,
     createPreviousResult,
     deletePreviousResult,
     getPreviousSearchTeerResult
}