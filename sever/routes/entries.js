var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('this is the Entries resource');
});

const GoodDeedsModel = require('../models/todoModel');

// This function is run if a GET method from the root / endpoint
router.get('/all', (req, res) => {
    GoodDeedsModel.find()
        .then(items => res.json(items));

    // Uncomment this if you want to send text to your client once you finish saving.
    //.then(items => res.send("Showing GET request of deedAPI Routes in routes/api/goodDeeds.js");
});

router.delete('/delete', function (req, res) {

    GoodDeedsModel.findByIdAndRemove(req.body.id, function (err) {
        if (err) {
            throw err; // If we get an error then bail
        }
        // Use Express to send a simple SUCCESS message
        res.json({result: 'OK'});
    })

});

router.get('/user/:user', function(req, res, next) {
    console.log(req.param.user);
    res.send('this is the Entries resource for: '+req.param.user);
});

module.exports = router;
