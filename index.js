const express = require("express");
const app = express();
const routes = require('./routers/api');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
mongoose.connect('mongodb+srv://Falconi:edu900fs@cluster0-iput3.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(bodyParse.json());
app.use(routes);


app.listen(process.env.port || 4000, function () {
    console.log('ready')
});


