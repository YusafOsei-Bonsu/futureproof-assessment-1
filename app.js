// Importing express and making an express application
const express = require('express');
const app = express();
// Importing body-parser
const bodyParser = require('body-parser');
// Importing cors
const cors = require("cors");
// Importing path
const path = require("path");

// Look for HTML files to render in the 'public' directory
app.set('views', path.join(__dirname, 'public'));

// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({extended: true}));

// To extract data from requests
app.use(express.urlencoded());

quotes = [
  '"Perfect is the enemy of good." <br> –Voltaire',
  '"I’m still learning." <br> –Michelangelo',
  '"Life is a journey, not a destination." <br> –Ralph Waldo Emerson',
  '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." <br> ―Abigail Adams',
  '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." <br> –Rumi',
  '"Be curious, not judgmental." <br> –Walt Whitman',
  '"You don’t have to be great to start, but you have to start to be great." <br> –Zig Ziglar',
  '"Be stubborn about your goals and flexible about your methods." <br> –Unknown',
  '"Nothing will work unless you do." <br> –Maya Angelou',
  '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." <br> –Earl Nightingale',
  '"Anyone who stops learning is old, whether at twenty or eighty." <br> —Henry Ford',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." <br> –Benjamin Franklin',
  '"Change is the end result of all true learning." <br> ―Leo Buscaglia',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." <br> ―Mahatma Gandhi',
  '"A learning curve is essential to growth." <br> –Tammy Bjelland'
];

// Retrieves a quote at random
function getRandomQuote() {
  index = Math.floor(Math.random() * quotes.length);
  // changed from 4 to index to make it random
  return quotes[index];
}

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("index"));

// write route to get all quotes below this line

// (insert your code here)

//---------------------------

// write route to get a random quote below this line
app.get('/randomQuote', (req, res) => {
  res.status(202).send(`${getRandomQuote()}`);
});

// (insert your code here)

//---------------------------

// make sure route can handle errors if index is out of range

app.get("/quotes/:index", (req, res) => res.send(quotes[req.params.index]));

//---------------------------

app.listen(3000, () => console.log(`Example app listening on port 3000!`));
