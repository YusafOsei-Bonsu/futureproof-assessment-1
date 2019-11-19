const axios = require('axios');

$('document').ready(function() {

  $("form").submit(event => {
    event.preventDefault();
    
    // I assumed that by entering 'localhost:8080/randomQuote', a random quote would be retrieved
    axios.get("/quote").then(response => {
      quote = response.data;
      $("#text").css({"min-height": "150px"});
      $("#text").html(`<p>${quote}</p>`);
      }).catch(error => console.log(error));
    });
});


