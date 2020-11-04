const path = require("path")
const router = require ("express").Router();
const apiRoutes = require ("./API")
// const googleRoutes = require("./google");

router.use("/api", apiRoutes);
// router.use("/google", googleRoutes);


router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

module.exports = router;