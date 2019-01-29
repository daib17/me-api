var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
    const data = {
        data: {
            name: "Daniel Ibanez",
            city: "SC Tenerife",
            description: "Focusing on my 2nd year in web development at BTH."
        }
    };

    res.json(data);
});

module.exports = router;
