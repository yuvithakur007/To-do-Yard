const quotes = [
  {
    quote: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
  },
  {
    quote: "The secret of getting ahead is getting started.",
    author: "Mark Twain",
  },
  {
    quote: "It’s hard to beat a person who never gives up.",
    author: "Babe Ruth",
  },
  {
    quote: "Everything you can imagine is real.",
    author: "Pablo Picasso",
  },
  {
    quote: "Whatever you are, be a good one.",
    author: "Abraham Lincoln",
  },
  {
    quote: "If opportunity doesn’t knock, build a door.",
    author: "Kurt Cobain",
  },
  {
    quote: "Nothing will work unless you do.",
    author: "Maya Angelou",
  },
  {
    quote: "Hey sky, take off you hat, I'm on my way!",
    author: "Vakebtuba Tereshkova",
  },
  {
    quote: "I would like to die on Mars. Just not on impact",
    author: "Elon Musk",
  },
  {
    quote: "I see Earth! It is so beautiful.",
    author: "Yuri Gagarin",
  },
];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");

const financeQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = financeQuotes.quote;
author.innerText = financeQuotes.author;

const quoteShow = document.querySelector(".quote");
const overlayChange = document.querySelector(".overlay");
const todoShow = document.querySelector(".todo");

function onSubmit() {
  quoteShow.classList.remove("hidden");
  overlayChange.classList.remove("overlay-opacity");
  todoShow.classList.remove("hidden");
}

document.querySelector(".login").addEventListener("submit", onSubmit);

if (savedUsername !== null) {
  quoteShow.classList.remove("hidden");
  overlayChange.classList.remove("overlay-opacity");
  todoShow.classList.remove("hidden");
} else {
}
