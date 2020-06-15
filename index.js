const express = require("express");
const app = express();
const bodyParse = require("body-parser");
const mongoose = require("mongoose");
const http = require("http");
const categoryRouter = require("./routers/categoryRouter");
const productRouter = require("./routers/productRouter");


mongoose.connect("mongodb+srv://rafael:edu900fs@unibe-7ujmc.azure.mongodb.net/unibe?retryWrites=true&w=majority");
mongoose.Promise = global.Promise;

app.use(bodyParse.json());
app.use(categoryRouter);
app.use(productRouter);

const PORT = process.env.PORT || 3000;
app.listen(3000, function () {
    console.log(`Listening on ${PORT}`);

});

var server = http.Server(app)

io.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('disconnect', () => console.log('Client disconnected'));
});