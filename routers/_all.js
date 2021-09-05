const router = require(`express`).Router();


const adminRoutes = require(`./user`);
const indexRoutes = require(`./home`);
const resultRoutes = require(`./result`);

router.use(`/admin`, adminRoutes);
router.use(`/`, indexRoutes);
router.use(`/result`, resultRoutes);

module.exports = router;