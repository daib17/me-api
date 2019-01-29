var express = require('express');
var router = express.Router();

router.get('/kmom01', function(req, res) {
    const questions = [
        {
            question: "Berätta utförligt om din syn på nodejs backend " +
            "ramverk och berätta vilket ramverk du valde och varför.",
            answer: "I don't have previous experience with Node.js frameworks, so I chose to work with Express since it seems to be a popular framework and it is also used by Emil in his API exercise for this week."
        },
        {
            question: "Berätta om din katalogstruktur" +
            " och hur du organiserade din kod, hur tänkte du?",
            answer: "I followed the file and folder structure used in the Node.js API with Express exercise. As I explain later, I played around with express-generator, but I didn't use any scaffolding for this first assignment."
        },
        {
            question: "Använde du någon form av scaffolding som ditt " + "valda ramverk erbjuder?",
            answer: "I installed express-generator following the guide in the Express site and I created the skeleton for an application. However I am not using scaffolding for the assignment this week, since I don't fully understand how views are rendered and the differences between the engines (ejs, pug, etc.). I would need to read a bit more about it before I can begin to use it with confidence."
        },
        {
            question: "Vad är din TIL för detta kmom?",
            answer: "This week I learned I lot of new stuff. From installing and configuring the Nginx server on Digital Ocean to getting started with the Express Node.js web application framework."
        },
    ];

    res.json({ data: questions });
});

module.exports = router;
