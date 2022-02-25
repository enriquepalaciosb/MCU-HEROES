var express = require('express');
var router = express.Router();

// define an array to hold our data. Later this should be stored on the sever
ServerHeroes = [];

function HeroObject (pID, pHeroName, pUserReport, pUserPhase, pURL) {
    this.ID = HeroIDMaker();
    if (pID != "") {
        this.ID = pID;
    }
    this.hero = pHeroName;
    this.report = pUserReport;
    this.year = pUserPhase;
    this.URL = pURL;
    console.log(HeroObject);
}
function HeroIDMaker() {
    return Math.random().toString(16).slice(5);
}
// save typing time, make up 3 for testing
ServerHeroes.push(new HeroObject("", " xIron Man", "Blew up a tank", 2, "youtube.com"));
ServerHeroes.push(new HeroObject("", " xShang Chi", "Made a dragon land on a hotel", 1, "youtube.com"));
ServerHeroes.push(new HeroObject("", " xStar Lord", "Destroyed a local cheesehead pub", 3, "youtube.com"));

/* GET home page. */
router.get('/', function(req, res, next) {
    res.sendFile('index.html');
  });

/* GET all Heroes data */
router.get('/accessDB', function(req, res) {
    res.status(200).json(ServerHeroes);
});

module.exports = router;