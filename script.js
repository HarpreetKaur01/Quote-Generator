console.log('https://api.quotable.io/random');

const API = 'https://api.quotable.io/random';

const generateButton = document.getElementById('generate-button');
const quote = document.getElementById('quote');

const author = document.getElementById('author');
 
async function getRandomQuote()
{
	const response = await fetch(API);
	const data = await response.json();
	quote.innerHTML = data.content;
	author.innerHTML = data.author;

} 
getRandomQuote()

generateButton.addEventListener('click', function(){
	getRandomQuote();
})