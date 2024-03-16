const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');
const { xss } = require('express-xss-sanitizer');
const mongoSanitizer = require('express-mongo-sanitize');

const routes = require('./routes');

const { handleError, convertToAPIError } = require('./middleware/apiError');

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('connected');
});

//parsing
app.use(bodyParser.json());

//sanitize
app.use(xss());
app.use(mongoSanitizer());

app.use('/api', routes);

//error handling
app.use(convertToAPIError);

app.use((err, req, res, next) => {
    handleError(err, res);
});

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
