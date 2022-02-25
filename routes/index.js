var express = require('express');
var router = express.Router();

// define an array to hold our data. Later this should be stored on the sever
ServerHeroes = [];

function Hero (pHeroName, pUserReport, pUserPhase, pURL) {
    this.hero = pHeroName;
    this.report = pUserReport;
    this.year = pUserPhase;
    this.URL = pURL;
}

// save typing time, make up 3 for testing
ServerHeroes.push(new Hero("xIron Man", "Blew up a tank", 2, "youtube.com"));
ServerHeroes.push(new Hero("xShang Chi", "Made a dragon land on a hotel", 1, "youtube.com"));
ServerHeroes.push(new Hero("xStar Lord", "Destroyed a local cheesehead pub", 3, "youtube.com"));

console.log(ServerHeroes);

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

/* GET all Heroes data */
router.get('/accessDB', function(req, res) {
    res.status(200).json(ServerHeroes);
});

/* Add one new note */
router.post('/AddReport', function(req, res) {
    const newReport = req.body;
    ServerHeroes.push(newReport);
    res.status(200);
});

module.exports = router;