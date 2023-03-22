const router = require('express').Router();
const authorRoutes = require("./authorAPI.js")

router.use('/author', authorRoutes)

module.exports = router;


