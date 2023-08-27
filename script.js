const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote-text');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// show new quote
function newQuote() {
    // pick random quote from api
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote)
    if (!quote.author) {
        authorText.textContent = 'unknown';
    } else {
        authorText.textContent = quote.author;
    }
    const quoteSpan = document.querySelector('.quote');
    quoteSpan.textContent = quote.text;
    // // get quote length to determine styling
    // if (quote.text.length > 150) {
    //     quoteText.classList.add('long-quote')
    // } else {
    //     quoteText.classList.remove('long-quote')
    // }

    // quoteText.textContent = quote.text;
}
//Get Quotes from API
async function GetQuotes() {
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        // catch error here
        console.error('Error in newQuote:', error);

    }
}
// tweet quote
function tweetQuote() {
    const quote = document.querySelector('.quote').textContent;
    const author = authorText.textContent;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote + " - " + author)}`;
    window.open(twitterUrl, '_blank');
}
// event listeners
newQuoteBtn.addEventListener('click', GetQuotes);
twitterBtn.addEventListener('click', tweetQuote);



// on load
GetQuotes();



// using local stored quotes
// function newQuote() {
//     // pick random quote form api
//     const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
//     console.log(quote);
// }

// newQuote();
