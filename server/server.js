const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv').config();

const bodyParser = require('body-parser');

const routes = require('./routes');
app.use('/api', routes);

mongoose.connect(process.env.DB_URL).then(() => {
    console.log('connected');
});
app.use(bodyParser.json());

const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log(`running on port ${port}`);
});
