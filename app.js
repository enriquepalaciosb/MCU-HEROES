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

// add file reading and writing ability here
var fs = require("fs"); // bring in this supplied library code

fileManager  = {
  read: function() {
    const stat = fs.statSync('heroData.json');
    if (stat.size !== 0) {                           
    var rawdata = fs.readFileSync('heroData.json'); // read disk file
    ServerHeroes = JSON.parse(rawdata);  // turn the file data into JSON format and overwrite our array
    }
    else {
      // make up 3 for testing
      ServerHeroes.push(new HeroObject("", " Iron Man", "Blew up a tank", "Two", "youtube.com"));
      ServerHeroes.push(new HeroObject("", " Shang Chi", "Made a dragon land on a hotel", "One", "youtube.com"));
      ServerHeroes.push(new HeroObject("", " Star Lord", "Destroyed a local cheesehead pub", "Three", "youtube.com"));
      fileManager.write();
    }
  },
  write: function() {
    let data = JSON.stringify(ServerHeroes);    // take our object data and make it writeable
    fs.writeFileSync('heroData.json', data);  // write it
  },
}

app.get('/', function(req, res) {
   res.sendFile('/index.html');
});

/* for user inputted hero "heroObject". */
app.get('/accessDB', function (req, res) {
  fileManager.read(); 
  res.json(ServerHeroes);
});

/* posted to database of user inputs. */
app.post('/addToDB', function(req, res) {
   const newEntry = req.body;
   console.log(newEntry);
   ServerHeroes.push(newEntry);
   fileManager.write();
   res.status(200).send('ENTRY ADDED!');
});

//MIGHT BE ABLE TO DO LATER IF WE HAVE AN ERROR PAGE:

// app.get('/error', function(req, res) {
//    // should get real data from some real operation, but instead ...
//    let message = "TRY AGAIN : P";

//    res.render('pages/error', {  // pass the data to the page renderer
//        message: message,
//    });
// });

app.listen(process.env.PORT || 3000);  
// console.log('3000 is the magic port');

module.exports = app;