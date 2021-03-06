const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const cors = require('cors');
const http = require("http");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");
const extraRouter = require("./routers/extraRouter");


mongoose.connect("mongodb+srv://rafael:edu900fs@unibe-7ujmc.azure.mongodb.net/unibe?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;
app.use(cors({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));
app.use(bodyParse.json());
app.use(categoryRouter);
app.use(productRouter);
app.use(extraRouter);

var server = http.Server(app);
const PORT = process.env.PORT || 3000;
app.listen(PORT, function () {
    console.log(`Listening on ${PORT}`)
});
const io = require('socket.io')(server);
io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});