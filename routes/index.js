var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const data = {
        data: {
            name: "Daniel Ibanez",
            city: "SC Tenerife",
            description: "Life goes by staring at the screen."
        }
    };

    res.json(data);
});

module.exports = router;
