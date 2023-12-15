const express = require('express'),
    expressLayouts = require('express-ejs-layouts')
    cors = require('cors'),
    bodyParser = require('body-parser'),
    opn = require('opn');
    cookieParser = require('cookie-parser');


const app = express();
const port = 8080;

// use body parser to grab info from a form
app.use(cookieParser());

app.use(bodyParser.urlencoded({ extended: true }))

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(require('./app/routes'));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
    opn(`http://localhost:${port}/`);

});

module.exports = app;
