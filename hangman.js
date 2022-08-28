// Letters 
const letters = 'abcdefghijklmnopqrstuvwxyz';

// get array from letters 
let lettersArray = Array.from(letters);

// Select letters container
let lettersContainer = document.querySelector('.letters');

// Generate letters
lettersArray.forEach( letter =>{

    //Create span
    let span = document.createElement('span');

    //Create letter text node
    let theLetter = document.createTextNode(letter);

    //Append the letter to spam
    span.appendChild(theLetter);

    //Add class to span
    span.className = 'letter-box';

    // Append span to te letters Container
    lettersContainer.appendChild(span);

});

// TODO=> Object of words + Category
const words = {
    programming: ["php", "javascript", "go", "scala", "fortran", "r", "mysql", "python"],
    movies: ["Prestige", "Inception", "Parasite", "Interstellar", "Whiplash", "Memento", "Coco", "Up"],
    people: ["Albert Einstein", "Hitchcock", "Alexander", "Cleopatra", "Mahatma Ghandi"],
    countries: ["Syria", "Palestine", "Yemen", "Egypt", "Bahrain", "Qatar"]
}

// Get random property
let allKeys = Object.keys(words);

// Random number deppend  on keys lengths
let randomPropNumber = Math.floor(Math.random() * allKeys.length);

// Random Category
let randomPropName = allKeys[randomPropNumber];

// Random category words
let randomPropValue = words[randomPropName];

// random Number deppend on works lengths
let randomValueNumber = Math.floor(Math.random() * randomPropValue.length);

// Random words
let randomValueValue = randomPropValue[randomValueNumber];

//Set category info 'THE CHOSEN WORD'
document.querySelector('.game-info .category span').innerHTML = randomPropName;

// Select letters guess element
let letersGuessContainer = document.querySelector('.letters-guess');

// convert chosen word to array
let lettersAndSpace = Array.from(randomValueValue);

// Create spans deppend on works carachters length
lettersAndSpace.forEach( letter =>{

    //create empty span
    let emptySpan = document.createElement('span');

    // If letter is space
    if(letter === ' '){

        // ADD class to the empty span
        emptySpan.className = 'with-space';
    }

    //ppend emptySpan to the letters guess Container
    letersGuessContainer.appendChild(emptySpan);

});

// select quess spans
let guessSpans = document.querySelectorAll('.letters-guess span');

// Set wrong attemps
let wrongAttempts = 0;

// Select the draw element (the hangman draw)
let theDraw = document.querySelector('.hangman-draw');

// Handle Clickcing on letters
document.addEventListener('click', (e)=>{

    // Set the chosen status
    let theStatus = false;

    if(e.target.className === 'letter-box'){

        e.target.classList.add('clicked');

        // Get clickced letter
        let theClickedLetter = e.target.innerHTML.toLowerCase();

        // the chosen word
        let theChosenWord = Array.from(randomValueValue.toLowerCase());

        // 
        lettersAndSpace.forEach( (wordLetter, wordIndex) =>{

            // IF the  clicked letter equal one of the chosen word letter
            if(theClickedLetter == wordLetter){

                // Set the status to correct
                theStatus = true;

                // Loop on all guess spans
                guessSpans.forEach((span, spanIndex)=>{
                    
                    if(wordIndex === spanIndex){

                        span.innerHTML = theClickedLetter;
                    }
                })

            }
        })

        // Outside the loop

        // if letters is wrong
        if(theStatus !== true){

            //increase the wrong attempts
            wrongAttempts++;

            //Add class wrong on the draw element
            theDraw.classList.add(`wrong-${wrongAttempts}`);

            // play fail sound
            document.getElementById('fail').play();

            if(wrongAttempts === 8){

                endGame();
                
                lettersContainer:classList.add('finished');
            }
        } else{
            document.getElementById('succes').play();
        }

    }
});

// END geme func
function endGame(){

    // create Popup Div
    let div = document.createElement('div');

    // Create text
    let divText = document.createTextNode(`Game Over, The Word is ${randomValueValue}`);

    // Append text to div
    div.appendChild(divText);

    // Add class on div
    div.className = 'popup';

    //Append dic to the body
    document.body.appendChild(div);

    // play the losing audio
    document.getElementById('fail').remove();

    document.getElementById('loser').play();

}

// Winning the game
function winningGame(){

    // create Popup Div
    let div = document.createElement('div');

    // Create text
    let divText = document.createTextNode('We Hv a Winner, Gongrats ^^');

    // Append text to div
    div.appendChild(divText);

    // Add class on div
    div.className = 'popup2';

    //Append dic to the body
    document.body.appendChild(div);

    // play the losing audio
    document.getElementById('succes').remove();

    document.getElementById('loser').play();;
}
// reload button (to keep the game)
let btn = document.getElementById('btn-reload');

btn.onclick = function () {
    'use strict';

    window.location.reload();
};