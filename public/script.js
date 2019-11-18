// Imported the random quote function from app.js to generate a random quote
import getRandomQuote from './app.js';

$('document').ready(function() {
  // Assumed that by pressing the button, a random quote would emerge
  $("#submitBtn").on("click", () => {
    $("#text").text(`${getRandomQuote()}`);
  });

  // $("form").submit(event => {

  // event.preventDefault();
  
  // // I assumed that by entering 'localhost:8080/randomQuote', a random quote would be retrieved
  // axios.get("localhost:8080/randomQuote").then(response => {
    
  //   quote = response.data;

  //   $("#text").css({
  //     "text-align": "center",
  //     "min-height": "150px",
  //     // Changed display into a string so it's recognised as a css prop
  //     "display": "flex",
  //     "justify-content": "center",
  //     "align-items": "center"
  //   });
    
  //   $("#text").html(quote);

  // });
  // });
});


