console.log('https://dummyjson.com/quotes/random');

const API = 'https://dummyjson.com/quotes/random';

const generateButton = document.getElementById('generate-button');
const quote = document.getElementById('quote');

const author = document.getElementById('author');
 
async function getRandomQuote()
{
	const response = await fetch(API);
	const data = await response.json();
	quote.innerHTML = data[0].q;
	author.innerHTML = `— ${data[0].a}`;

} 
getRandomQuote()

generateButton.addEventListener('click', function(){
	getRandomQuote();
})
