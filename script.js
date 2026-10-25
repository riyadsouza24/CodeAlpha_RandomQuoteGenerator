const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Don't watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    }
];

let currentIndex = -1;

function newQuote() {
    let randomIndex;

    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === currentIndex && quotes.length > 1);

    currentIndex = randomIndex;

    showQuote();
}

function previousQuote() {
    if (currentIndex === -1) {
        alert("Please select a quote first!");
        return;
    }

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = quotes.length - 1;
    }

    showQuote();
}

function showQuote() {
    document.getElementById("quote").textContent =
        '"' + quotes[currentIndex].quote + '"';

    document.getElementById("author").textContent =
        "— " + quotes[currentIndex].author;
}

function copyQuote() {
    const quote = document.getElementById("quote").textContent;
    const author = document.getElementById("author").textContent;

    navigator.clipboard.writeText(quote + " " + author);

    alert("Quote copied! 📋");
}