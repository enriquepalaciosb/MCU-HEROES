var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

let ServerHeroes = [];

let HeroObject = function (pID, pHeroName, pUserReport, pUserPhase, pURL) {
   this.ID = Math.random().toString(16).slice(5);
   this.hero = pHeroName;
   this.report = pUserReport;
   this.year = pUserPhase;
   this.URL = pURL;
}

ServerHeroes.push(new HeroObject("", " xIron Man", "Blew up a tank", 2, "youtube.com"));
ServerHeroes.push(new HeroObject("", " xShang Chi", "Made a dragon land on a hotel", 1, "youtube.com"));
ServerHeroes.push(new HeroObject("", " xStar Lord", "Destroyed a local cheesehead pub", 3, "youtube.com"));
console.log(ServerHeroes);

app.get('/', function(req, res) {
   res.sendFile('/index.html');
});

/* for user inputted hero "heroObject". */
app.get('/accessDB', function (req, res) {
   res.json(ServerHeroes);
});

/* posted to database of user inputs. */
app.post('/addToDB', function(req, res) {
   console.log(req.body);
   ServerHeroes.push(req.body);
   res.status(200).send('CORRECT');
});

//MIGHT BE ABLE TO DO LATER IF WE HAVE AN ERROR PAGE:

// app.get('/error', function(req, res) {
//    // should get real data from some real operation, but instead ...
//    let message = "TRY AGAIN : P";

//    res.render('pages/error', {  // pass the data to the page renderer
//        message: message,
//    });
// });

app.listen(3000);  
console.log('3000 is the magic port');

module.exports = app;