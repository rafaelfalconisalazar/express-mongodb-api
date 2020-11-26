const express = require('express');
const router = express.Router();
const uri = "/api/v1/extra";

router.get(uri, function (req, res) {

    res.send("hola");
})

module.exports = router;