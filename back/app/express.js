require('dotenv').config();

const express = require('express');
const router = require('./routers');
const cors = require('cors');
const job = require("./config/cron.js");

const app = express();

if(process.env.NODE_ENV === "production") job.start();

app.use(express.json());
app.use(express.urlencoded({ extended: true}));
const corsOptions = {
    origin: process.env.FRONT_URL || 'http://localhost:3000',
    // origin: 'http://localhost:3000',
    // origin: 'https://actiively-front.onrender.com',
    // origin: '*',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use(router);

module.exports = app