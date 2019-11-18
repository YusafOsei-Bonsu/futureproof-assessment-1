$('document').ready(function() {
  $("form").submit(event => {

  event.preventDefault();
  
  // I assumed that by entering 'localhost:8080/randomQuote', a random quote would be retrieved
  axios.get("/quote").then(response => {
    
    quote = response.data;

    $("#text").css({
      "text-align": "center",
      "min-height": "150px",
      // Changed display into a string so it's recognised as a css prop
      "display": "flex",
      "justify-content": "center",
      "align-items": "center"
    });
    
    $("#text").html(quote);

  });
  });
});


