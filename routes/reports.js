var express = require('express');
var router = express.Router();

router.get('/kmom01', function(req, res) {
    const questions = [
        {
            question: "Berätta utförligt om din syn på nodejs backend " +
            "ramverk och berätta vilket ramverk du valde och varför.",
            answer: ""
        },
        {
            question: "Berätta om din katalogstruktur" +
            " och hur du organiserade din kod, hur tänkte du?",
            answer: ""
        },
        {
            question: "Använde du någon form av scaffolding som ditt " + "valda ramverk erbjuder?",
            answer: ""
        },
        {
            question: "Vad är din TIL för detta kmom?",
            answer: ""
        },
    ];

    res.json({ data: questions });
});

module.exports = router;
