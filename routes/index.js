const express = require('express')
const router = express.Router()

const mainController = require('../controller/main-controller')

router.get('/', mainController.getHomePage)

module.exports = router