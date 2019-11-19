// Importing express and making an express application
const express = require('express');
const app = express();
// Importing body-parser
const bodyParser = require('body-parser');
// Importing cors
const cors = require("cors");
// Importing path
const path = require("path");
// Importing http
const http = require('http');
// Importing the axios pkg
const axios = require('axios');

// Look for HTML files to render in the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Finishing up the body-parser set up
app.use(bodyParser.urlencoded({extended: true}));

// To extract data from requests
app.use(express.urlencoded());

const quotes = [
  '"Perfect is the enemy of good." – <strong>Voltaire</strong>',
  '"I’m still learning." – <strong>Michelangelo</strong>',
  '"Life is a journey, not a destination." – <strong>Ralph Waldo Emerson</strong>',
  '"Learning is not attained by chance, it must be sought for with ardor and attended to with diligence." ― <strong>Abigail Adams</strong>',
  '"Yesterday I was clever, so I changed the world. Today I am wise, so I am changing myself." – <strong>Rumi</strong>',
  '"Be curious, not judgmental." – <strong>Walt Whitman</strong>',
  '"You don’t have to be great to start, but you have to start to be great." – <strong>Zig Ziglar</strong>',
  '"Be stubborn about your goals and flexible about your methods." – <strong>Unknown</strong>',
  '"Nothing will work unless you do." – <strong>Maya Angelou</strong>',
  '"Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway." – <strong>Earl Nightingale</strong>',
  '"Anyone who stops learning is old, whether at twenty or eighty." — <strong>Henry Ford</strong>',
  '"Tell me and I forget. Teach me and I remember. Involve me and I learn." – <strong>Benjamin Franklin</strong>',
  '"Change is the end result of all true learning." ― <strong>Leo Buscaglia</strong>',
  '"Live as if you were to die tomorrow. Learn as if you were to live forever." ― <strong>Mahatma Gandhi</strong>',
  '"A learning curve is essential to growth." – <strong>Tammy Bjelland</strong>'
];

// ES6 version of its former self
const getRandomQuote = () => {
  index = Math.floor(Math.random() * quotes.length);
  // changed from 4 to index to make it random
  return quotes[index];
}

app.use(cors());
app.use(express.static("public"));

app.get("/", (req, res) => res.send("index"));

// write route to get all quotes below this line
app.get('/all', (req, res) => {
  let allQuotes = '';

  quotes.forEach(quote => allQuotes += `${quote} <br>`);

app.get('/quote', (req, res) => res.status(200).send(getRandomQuote()));

app.get("/quotes/:index", (req, res) => {
  // If the index is within the valid range...
  if (req.params.index >= 1 && req.params.index <= quotes.length) {
    // return the quote
    res.status(200).send(quotes[req.params.index - 1]);
  } else {
    // Otherwise, return the error
    res.status(404).send(`Error: enter a number between 1 and 15.`);
  }
});

// (insert your code here)
//---------------------------
// write route to get a random quote below this line
// app.get('/quote', (req, res) => res.status(202).send(`${getRandomQuote()}`));

// (insert your code here)
//---------------------------
// make sure route can handle errors if index is out of range
// If the index is within the range, a quote is returned. Otherwise, a 404 webpage is presented, stating that the requested quote doesn't exist.
app.get("/quotes/:index", (req, res) => (req.params.index >= 1 && req.params.index <= 15) ? res.status(202).send(quotes[req.params.index - 1]) : res.status(404).send(`Error: enter a number between 1 and 15.`));

//---------------------------
app.listen(3000, () => console.log(`Example app listening on port 3000!`));

});