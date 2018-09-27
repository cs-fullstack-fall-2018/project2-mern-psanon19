var express = require('express');
const Todos = require('../models/todoModel');
var router = express.Router();
const moment = require('moment');

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('this is the Submit resource');
});

router.post('/info', function (req, res, next) {

    const submitInfo = (Todos({
        Username: "You",
        Title: "Are",
        JournalEntry: "I love to eat eat eat Apples and Bannans",
        Date: moment()
    }));

    submitInfo.save(function (Error) {
        if (Error) {
            throw Error; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        res.json({result: 'I sent you a Json'});
    });


});

router.post('/journal', function (req, res, next) {
    const newAcc =
        Todos({
            Username: req.body.Username,
            Title: req.body.Title,
            JournalEntry: req.body.JournalEntry,
            Date: moment()
        });

    newAcc.save(function (reyError) {
        if (reyError) {
            throw reyError; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        res.json({result: 'Ok'});
    });

});

module.exports = router;
