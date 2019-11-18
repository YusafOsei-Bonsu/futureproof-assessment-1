$('document').ready(function() {
  $("form").submit(event => {

  event.preventDefault();
  
  axios.post("localhost:8080/rand").then(response => {
    
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


