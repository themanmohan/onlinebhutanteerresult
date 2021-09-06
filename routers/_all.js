const router = require(`express`).Router();


const adminRoutes = require(`./user`);
const indexRoutes = require(`./home`);
const resultRoutes = require(`./result`);
const commonNumberRound1Routes = require(`./commonNumber/commonNumberRound1`);
const commonNumberRound2Routes = require(`./commonNumber/commonNumberRound2`);
const commonNumber = require(`./commonNumber/index`);
const teerCalenderRoute = require(`./teerCalender`);
const dreamNumberRoute = require(`./dreamNumber`);
const reputedCounterRoute = require(`./reputedCounter`);
const teerChampionRoute = require(`./champion`);
const predictTargetRoute = require(`./predictTaregt`);
const previousRoute = require(`./previousResult`);


router.use(`/admin`, adminRoutes);
router.use(`/`, indexRoutes);
router.use(`/result`, resultRoutes);
router.use(`/commonnumberround1`, commonNumberRound1Routes);
router.use(`/commonnumberround2`, commonNumberRound2Routes);
router.use(`/commonnumber`, commonNumber);
router.use(`/teercalender`, teerCalenderRoute);
router.use(`/dreamnumber`, dreamNumberRoute);
router.use(`/reputedcounter`, reputedCounterRoute);
router.use(`/teerchampion`, teerChampionRoute);
router.use(`/predicttarget`, predictTargetRoute);
router.use(`/previousresult`, previousRoute);

module.exports = router;