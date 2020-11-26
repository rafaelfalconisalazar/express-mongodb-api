const express = require('express');
const router = express.Router();
const uri = "/api/v1/extra";

router.get(uri, function (req, res) {

    res.send("hola mundo");
})

router.get(uri + "/:id", function (req, res) {
    let id = req.params.id;
    res.send("hola: " + id);
})

module.exports = router;