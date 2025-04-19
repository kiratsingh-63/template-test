// const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

// Function to get a motivational quote from the API
async function getQuote() {
  const apiUrl = 'https://api.quotable.io/random?tags=motivational';

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    quoteElement.innerText = `"${data.content}"`;
    authorElement.innerText = data.author;
  } catch (error) {
    quoteElement.innerText = 'Failed to fetch quote. Please try again.';
    authorElement.innerText = '';
    console.error('Error fetching quote:', error);
  }
}

// Load a quote when the page loads
getQuote();

// Load a new quote when the button is clicked
newQuoteBtn.addEventListener('click', getQuote);
