'user strict';

const express = require('express');
const app = express();
const port = process.env.PORT || 5500;
const expressHandlebars = require('express-handlebars');

app.use(express.static(__dirname + '/public'));

// set up layout
app.engine('hbs', expressHandlebars.engine({
    layoutsDir: __dirname + '/views/layouts',
    partialsDir: __dirname + '/views/partials',
    extname: 'hbs',
    defaultLayout: 'layout'
}));
app.set('view engine', 'hbs');

// routes
app.use('/', require('./routes/indexRoute'));

// start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

