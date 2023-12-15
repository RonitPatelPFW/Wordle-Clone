const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller'),
    fetchController = require('./controllers/fetch.controller')

// export reroutes
module.exports = router 

// define routes
// main routes
router.get('/', mainController.showHome)

router.get('/fetchdata', fetchController.GetData)

router.post('/', fetchController.SetDifficulty)
