const express = require("express");
const app = express();
const routes = require('./routers/api');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const http= require('http');
mongoose.connect('mongodb+srv://Falconi:edu900fs@cluster0-iput3.mongodb.net/test?retryWrites=true&w=majority');
mongoose.Promise = global.Promise;

app.use(bodyParse.json());
app.use(routes);

var server=http.Server(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
});
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});
