require('dotenv').config();

const express = require('express');
const router = require('./routers');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const corsOptions = {
    // origin: 'http://localhost:3000',
    origin: 'https://actiively-front.onrender.com',
    // origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(router);

module.exports = app