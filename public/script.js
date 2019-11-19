$('document').ready(() =>  {
  $("form").submit(event => {
    event.preventDefault();
    // I assumed that by entering 'localhost:8080/randomQuote', a random quote would be retrieved
    axios.get("http://localhost:3000/quote").then(response => {
      quote = response.data;
      $("#text").css({
        "text-align": "center",
        "min-height": "150px",
        "display": "flex",
        "justify-content": "center",
        "align-items": "center"
      });
      $("#text").html(quote);
    });
  });
});