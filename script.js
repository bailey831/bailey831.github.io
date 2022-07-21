/* .js files add interaction to your website */

var quoteList = ["1 in 4 pregnancies end in an abortion", "Abortions made in a sanitary environment performed by a professional are one of the safest medical procedures", "Outlawing abortion only stops safe abortions"];

var myButton = document.getElementById("myButton");

var quote = document.getElementById("quote");

var count = 0;
myButton.addEventListener("click",displayQuote);

//displayQuote function
function displayQuote(){
  quote.innerHTML = quoteList[count++];

  if(count == quoteList.length){
    count = 0;
  }
}
