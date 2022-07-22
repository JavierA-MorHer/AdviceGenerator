const idQuote = document.getElementById("id-advice");
const text = document.getElementById("quote");
const dice = document.getElementById("btn");

fetch("https://api.adviceslip.com/advice")
  .then((response) => response.json())
  .then((json) => generateRandomQuote(json));

dice.addEventListener("click", (_) => location.reload());

function generateRandomQuote(quote) {
  text.innerHTML = quote.slip.advice;
  idQuote.innerHTML = quote.slip.id;
}