const express = require('express')
    app = express()
    expressLayouts = require('express-ejs-layouts')

const port = 8080

app.use(express.static(__dirname + '/public'))

// set ejs as our templating engine
app.set('view engine', 'ejs')
app.use(expressLayouts)

// set the routes
app.use(require('./app/routes'))

// start our server
app.listen(port, () => {
    console.log(`App listening on http://localhost: ${port}`)
})

module.exports = app;