const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv').config();
const mongoose = require('./connection/connection');
const appRoute = require('./appRoute');

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use('/api',appRoute);



app.listen(process.env.PORT,()=>console.log(`server started at ${process.env.PORT}`))