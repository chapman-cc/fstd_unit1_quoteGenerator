// ----------------------------
// QUOTES
// ----------------------------

const quotes = [{
		quote: "I find your lack of faith disturbing.",
		source: "Darth Vader",
		citation: "Star Wars: A New Hope",
		year: 1977,
		tag: "Movie"
	},
	{
		quote: "Help me, Obi-Wan Kenobi. You’re my only hope.",
		source: "Leia Organa",
		citation: "Star Wars: A New Hope",
		year: 1977,
		tag: "Movie"
	},
	{
		quote: "Never tell me the odds!",
		source: "Han Solo",
		citation: "Star Wars: The Empire Strikes Back",
		year: 1980,
		tag: "Movie"
	},
	{
		quote: "No. I am your father.",
		source: "Darth Vader",
		citation: "Star Wars: The Empire Strikes Back",
		year: 1980,
		tag: "Movie"
	},
	{
		quote: "Do. Or do not. There is no try.",
		source: "Yoda",
		citation: "Star Wars: The Empire Strikes Back",
		year: 1980,
		tag: "Movie"
	},
	{
		quote: "When you realize you want to spend the rest of your life with somebody, you want the rest of your life to start as soon as possible.",
		source: "Harry",
		tag: "Movie"
	}, 
	{
		quote: "Chewie, we're home.",
		source: "Han Solo",
		tag: "Movie"
	},
	{
		quote: "WHRRRAAARGH. WRAHGH",
		source: "Chewbacca",
		tag: "Movie"
	},
	{
		quote: "Beep-bee-bee-boop-bee-doo-weep",
		source: "R2-D2",
		tag: "Movie"
	},
	{
		quote: "Thank You Mario! But our princess is in another castle!",
		source: "Toad",
		citation: "Super Mario Bros",
		tag: "videogame"
	},
	{
		quote: "This is your fault. I’m going to kill you. And all the cake is gone. You don’t even care, do you?",
		source: "Portal",
		tag: "videogame"
	},
	{
		quote: "Get over here",
		source: "Scorpion",
		citation: "Mortal Kombat",
		tag: "videogame"
	},
	{
		quote: "...",
		source: "Link",
		citation: "The Legend of Zelda",
		tag: "videogame"
	},
	{
		quote: "NOTHING IS MORE BADASS THAN TREATING A WOMAN WITH RESPECT!",
		source: "Mr. TORGUE",
		tag: "videogame"
	},
	{
		quote: "It’s dangerous to go alone, take this!",
		source: "Old man",
		citation: "The Legend of Zelda",
		tag: "videogame"
	},
	{
		quote: "Listen",
		source: "Navi",
		citation: "The Legend of Zelda: Ocarina of Time",
		tag: "videogame"
	},

];

// ----------------------------
// FUNCTIONS 
// ----------------------------

/**
 * generate a random number from parameter value, min is 0
 * @param {number} maximum of generated number
 */
function getRand (max) {
	const number = Math.floor((Math.random() * max));
	return number
}

/**
 * generate a random quote by calling getRand()
 */
function getRandomQuote() {
	const random = getRand(quotes.length);
	return quotes[random]
};

/**
 * calling getRandomQuote() and append the quote into html
 */
function printQuote() {
	const quote = getRandomQuote();
	const citation = quote.citation? `<span class="citation">${quote.citation}</span>(<span>${quote.tag}</span>)` : "";
	const year = quote.year? `<span class="year">${quote.year}</span>` : "";
	const html = `
		<p class="quote">${quote.quote}</p>
		<p class="source">${quote.source}
		${citation}
		${year}
		</p>`
	
	const quoteBox = document.getElementById("quote-box");
	quoteBox.innerHTML = html;

	// generate random RGB color for background 
	const randomRGB = `rgb(${getRand(255)}, ${getRand(255)}, ${getRand(255)})`
	document.querySelector("body").style.backgroundColor = randomRGB;

	// reset the interval timer if button is clicked
}

// ----------------------------
// RUN 
// ----------------------------

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 1000 * 20); // will run printQuote() every 20 sec
