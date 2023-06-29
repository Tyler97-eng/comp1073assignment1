// Assignment 1 | COMP1073 Client-Side JavaScript

// Name: Tyler Elliott
// Student Number: 200345596
// Date: June 29th, 2023

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
let synth = window.speechSynthesis;
// arrays instantiated for each button to hold different string values
const nounArray = ['The turkey', 'My ass', 'Mario Mario', 'The Demon King', 'John Cena'];
const verbArray = ['sat on', 'ate', 'destroyed', 'did battle with', 'tweeted about'];
const adjectiveArray = ['a fat', 'a skinny', 'a funny', 'a tiny', 'a blue'];
const noun2Array = ['chicken', 'Fortnite dude', 'elephant', 'platypus', 'Link'];
const settingArray = ['on Mars', 'in the ring', 'at Burger King', 'in the garden', 'at Hyrule Castle'];
// array to store items collected from above arrays in storymaking process
let textArray = [];
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
let textToSpeak = '';
// different variables to hold references to elements in HTML document
let nounsButton = document.querySelector('.nouns');
let verbsButton = document.querySelector('.verbs');
let adjectivesButton = document.querySelector('.adjectives');
let nouns2Button = document.querySelector('.nouns2');
let settingsButton = document.querySelector('.settings');
let speakButton = document.querySelector('.speak');
let surpriseButton = document.querySelector('.surprise');
let resetButton = document.querySelector('.reset');


/* Functions
-------------------------------------------------- */
// function to generate a random number for click events
function randomNumber() {
	// returns floor value of Math.random value (between 0 and 1) multiplied by 5 to get a number between 0-4
	return Math.floor(Math.random() * 5);
}
// set function from assignment to use passed string as spoken text
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	let utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// if nounsButton is clicked, call function to retrieve random noun from array
nounsButton.onclick = function () {
	// call randomNumber function to obtain number between 0-4 to obtain element at that index in nounArray, then store in a variable
	let randomNoun = nounArray[randomNumber()];
	// store item in index 0 of textArray
	textArray[0] = randomNoun;
	// call speakNow function and pass randomNoun string as an argument so that item chosen is spoken (as in the real storymaker toy)
	speakNow(randomNoun);
	// display randomNoun in noun section of toy
	document.querySelector('.chosenNoun').textContent = randomNoun;
}
// if verbsButton is clicked, call function to retrieve random verb from array
verbsButton.onclick = function () {
	let randomVerb = verbArray[randomNumber()];
	textArray[1] = randomVerb;
	speakNow(randomVerb);
	document.querySelector('.chosenVerb').textContent = randomVerb;
}
// if adjectivesButton is clicked, call function to retrieve random adjective from array
adjectivesButton.onclick = function () {
	let randomAdjective = adjectiveArray[randomNumber()];
	textArray[2] = randomAdjective;
	speakNow(randomAdjective);
	document.querySelector('.chosenAdjective').textContent = randomAdjective;
}
// if nouns2Button is clicked, call function to retrieve random noun from array
nouns2Button.onclick = function () {
	let randomNoun2 = noun2Array[randomNumber()];
	textArray[3] = randomNoun2;
	speakNow(randomNoun2);
	document.querySelector('.chosenNoun2').textContent = randomNoun2;
}
// if settingsButton is clicked, call function to retrieve random setting from array
settingsButton.onclick = function () {
	let randomSetting = settingArray[randomNumber()];
	textArray[4] = randomSetting;
	speakNow(randomSetting);
	document.querySelector('.chosenSetting').textContent = randomSetting;
}

// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
	// concatenate all items in textArray separated by a space
	textToSpeak = textArray.join(' ');
	// call speakNow function and pass variable as argument so that story is read aloud
	speakNow(textToSpeak);
}

// when surpriseButton is clicked, generate a random story by chossing random elements from arrays
surpriseButton.onclick = function () {
	// at each index in textArray, add element of randomNumber index of each array then display chosen item in each section
	textArray[0] = nounArray[randomNumber()];
	document.querySelector('.chosenNoun').textContent = textArray[0];
	textArray[1] = verbArray[randomNumber()];
	document.querySelector('.chosenVerb').textContent = textArray[1];
	textArray[2] = adjectiveArray[randomNumber()];
	document.querySelector('.chosenAdjective').textContent = textArray[2];
	textArray[3] = noun2Array[randomNumber()];
	document.querySelector('.chosenNoun2').textContent = textArray[3];
	textArray[4] = settingArray[randomNumber()];
	document.querySelector('.chosenSetting').textContent = textArray[4];
	// join method used to concatenate items in textArray into a string separated by spaces
	textToSpeak = textArray.join(' ');
	// call speakNow function and pass textToSpeak string as argument
	speakNow(textToSpeak);
}

// when resetButton is clicked, reset all values stored for current story
resetButton.onclick = function () {
	// textContent for each section set to default values
	document.querySelector('.chosenNoun').textContent = 'Noun';
	document.querySelector('.chosenVerb').textContent = 'Verb';
	document.querySelector('.chosenAdjective').textContent = 'Adjective';
	document.querySelector('.chosenNoun2').textContent = 'Noun';
	document.querySelector('.chosenSetting').textContent = 'Setting';
	// textArray is cleared
	textArray = [];
	// textToSpeak string is set to blank
	textToSpeak = '';
}