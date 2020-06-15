const express = require('express');
const router = express.Router();
const Example = require('../documents/document');
const uri = '/api/v1/example'


router.post(uri, function (req, res) {
    let example = req.body;
    if (example.name == undefined) res.status(403).send('"the name is required"');
    Example.create(req.body).then(function () {
        res.send(202, '"example"')
    }).catch(error => {
        res.status(403).send('"information send is invalid"');
    });

});

router.delete(uri + "/:id", function (req, res) {
    let id = req.params.id;
    if (id == undefined) res.status(403).send('"the id is required"');
    Example.findByIdAndRemove(id).then(function () {
        res.send(202, '"example deleted"')
    }).catch(error => {
        res.status(403).send('"no example find"');
    });
});

router.get(uri, function (req, res) {
    Example.find().then(function (examples) {
        res.send(examples);
    })

});

router.get(uri + "/:id", function (req, res) {
    let id = req.params.id;
    if (id == undefined) res.status(403).send('"the id is required"');
    Example.findById(id).then(function (examples) {
        res.send(examples);
    }).catch(error => {
        res.status(403).send('"no example find"');
    });

});
router.put(uri + "/:id", function (req, res) {
    let id = req.params.id;
    if (id == undefined) res.status(403).send('"the id is required"');
    Example.findByIdAndUpdate(id, req.body).then(function (examples) {
        res.send(examples);
    }).catch(error => {
        res.status(403).send('"no example find"');
    });

});

module.exports = router;