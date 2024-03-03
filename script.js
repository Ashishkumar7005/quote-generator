const API_URL= "https://api.quotable.io/random";
const quote = document.getElementById("content");
const author = document.getElementById("author");
const newQuote = document.querySelector(".newq");
const twt = document.querySelector(".twt");

async function quoteGenerator(url){
   const response = await fetch(url);
   const data = await response.json();
   quote.innerHTML = data.content;
   author.innerHTML = data.author;
}

quoteGenerator(API_URL);


newQuote.addEventListener("click",()=>{
    quoteGenerator(API_URL);
})


twt.addEventListener("click",()=>{
    window.open("https://twitter.com/intent/tweet?text="+ quote.innerHTML, "Tweet Window","width=600 , height=300");
})