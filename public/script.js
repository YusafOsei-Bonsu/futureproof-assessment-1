const axios = require('axios');

$('document').ready(function() {

  $("form").submit(event => {
    event.preventDefault();
    
    axios.get("http://localhost:3000/quote").then(response => {
      quote = response.data;
      $("#text").css({
        "text-align": "center",
        "min-height": "5px",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("#text").html(quote);  
    });
  });
});
