const router = require('express').Router();
const authorRoutes = require("./authorAPI.js")
const assessRoutes = require("./itemsAPI.js")

router.use('/author', authorRoutes)
router.use('/items', assessRoutes)

module.exports = router;


