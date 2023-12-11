const express = require('express'),
    router = express.Router(),
    mainController = require('./controllers/main.controller')

// export reroutes
module.exports = router 

// define routes
// main routes
router.get('/', mainController.showHome)

router.get('/fetchData', async (req, res) => {
    try {
      const response = await fetch(`https://www.nytimes.com/svc/wordle/v2/${req.query.date}.json`);
      const data = await response.json();
      res.json(data);
    } catch (error) {
      console.error('Error fetching data:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  