const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    fetchController = require('./controllers/fetch.controller'),
    cookieController = require('./controllers/cookie.controller')

// export reroutes
module.exports = router 

// define routes
// main routes
router.get('/', mainController.showHome)

// Get Answer routes
router.get('/fetchdata', fetchController.GetData)
router.post('/', fetchController.SetDifficulty)

//cookie routes
router.get('/cookie', cookieController.setCookie)


