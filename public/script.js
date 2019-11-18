$('document').ready(function() {
//   $('#submitBtn').submit(event => {
//     // Prevents refreshing of webpage
//     event.preventDefault();
  
//     // I assumed that by entering 'localhost:8080/randomQuote', a random quote would be retrieved
//     axios.get("/axios").then(response => {
//       quote = response.data;
//       $("#text").css({"min-height": "150px"});
//       $("#text").html(quote);
//   });
// });

  $('#submitBtn').on("click", () => {
    // Prevents refreshing of webpage
    event.preventDefault();

    // I assumed that by entering 'localhost:8080/randomQuote', a random quote would be retrieved
    axios.get("/axios").then(response => {
      quote = response.data;
      $("#text").css({"min-height": "150px"});
      $("#text").html(quote);
    });
  });
});


