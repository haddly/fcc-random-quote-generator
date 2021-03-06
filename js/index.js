
'use strict';
//create empty var for random quotes to be placed into

var ranQuotes = "";
//create random quotes --> apply them to the input button --> then make this quote available for twitter when clicking on the "tweet this quote" button.
var quote_function = function quote_function() {
  ranQuotes = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("random-quote").innerHTML = "<h3>Sir Winston Churchill: <q>" + ranQuotes + "</q>";
  $('#tweet').attr('href', 'https://twitter.com/intent/tweet?text=' + "Sir Winston Churchill: " + ranQuotes).attr('target', '_blank');
};
//array of possible quotes to be randomly generated
var quotes = ["It is a good thing for an uneducated man to read books of quotations.", "There are a terrible lot of lies going about the world, and the worst of it is that half of them are true.", "To improve is to change, so to be perfect is to change often.", "Personally I’m always ready to learn, although I do not always like being taught.", "History will be kind to me for I intend to write it.", "Attitude is a little thing that makes a BIG difference.", "If you’re going through hell, keep going.", "You have enemies? Good. It means you’ve stood up for something, sometime in your life.", "It is wonderful what great strides can be made when there is a resolute purpose behind them.", "The greatest lesson in life is to know that even fools are right sometimes."];
//jQuery function to apply "quote_function" when user clicks on the button "Click for a quote"
$(function () {
  $('#clickQuote').on("click", function () {
    quote_function();
  });
});