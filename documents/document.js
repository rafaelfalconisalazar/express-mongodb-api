const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ExampleSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    rank: String,
    available: Boolean,
    array: []
});

const Example = mongoose.model('example', ExampleSchema);

module.exports = Example;