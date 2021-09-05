const router = require(`express`).Router();


const adminRoutes = require(`./user`);
 

router.use(`/admin`, adminRoutes);


module.exports = router;