// Hello! Thanks for reviewing my project. I want to note something I did differently than suggested by Treehouse.
//I have included the getRandomQuote function inside of the printQuote function. It didn't make any sense to me to 
//have them separate and I feel its cleaner like this. Please don't fail me for it! ;) I used jquery in the 
//randomColor function. Happy coding!
document.getElementById('loadQuote').addEventListener("click", () => {
	

	setRandomColor();
	printQuote();
	
});


const quotes = [
	
	
	{
		quote : "What you are screams so loudly in my ears I cannot hear what you say.",
		source: "Ralph Waldo Emerson"
		
		
	},
	
	
		
	{
		quote : "It does not matter how slowly you go as long as you do not stop.",
		source: "Confucius"
		
		
	},
	
		
	{
		quote : "If you can dream it, you can do it.",
		source: "Walt Disney"
		
		
	},
	
		
	{
		quote : "Well done is better than well said.",
		source: "Benjamin Franklin"
		
		
	},
	
		
	{
		quote : "Always desire to learn something useful.",
		source: "Sophocles"
		
		
	},
	
	{
		quote : "I believe that life is an intelligent thing: that things aren't random.",
		source: "Steve Jobs"
		
		
	},
	
	{
		quote : "Our time on earth is so random.",
		source: "Lisa Ling"
		
		
	},
	
	{
		quote : "Maybe life is random, but I doubt it.",
		source: "Steven Tyler"
		
		
	},
	
	{
		
		quote : "Seize the day, else your dreams and aspirations will fade away.",
		source: "Unknown"
		
	}
	
];





	
function printQuote(){
	const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
	document.getElementById("quote").innerHTML = randomQuote.quote;
	document.getElementById("source").innerHTML = randomQuote.source;
	
}


	function getRandomColor() {
		const letters = '0123456789ABCDEF';
  		let color = '#';
		for (let i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("body").css("background-color", getRandomColor());
}
	



