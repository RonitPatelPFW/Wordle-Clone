const express = require('express'),
    expressLayouts = require('express-ejs-layouts')
    cors = require('cors')

const app = express();
const port = 8080;

app.use(cors());
app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(require('./app/routes'));

app.listen(port, () => {
    console.log(`App listening on http://localhost:${port}`);
});

module.exports = app;
