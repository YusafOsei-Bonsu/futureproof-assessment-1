const express = require('express');
const app = express();
const cors = require("cors");

quotes = [
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

// ES6 version of its former self. It returns a random quote.
const getRandomQuote = () => quotes[Math.floor(Math.random() * quotes.length)];

app.use(cors());

// Access to static files in public directory, including CSS and HTML
app.use(express.static("public"));

app.get("/", (req, res) => res.send("index"));

app.get('/all', (req, res) => {
  let allQuotes = '';
  quotes.forEach(quote => allQuotes += `${quote} <br>`);
  // although 202 is 'accepted' - a 200 response would be used here
  res.status(200).send(allQuotes);
});

// although 202 is 'accepted' - a 200 response would be used here
// by making the response a string here you will create challenges in the axios call from the click event.
app.get('/quote', (req, res) => res.status(200).send(getRandomQuote()));

// although 202 is 'accepted' - a 200 response would be used here
// ensure that your code is readable for other humans - format is so it is more friendly
// if the quotes array was extended, would this logic still be valid?
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

//---------------------------
app.listen(3000, () => console.log(`Example app listening on port 3000!`));
