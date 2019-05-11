
var wordBank = ["abcdefghi jklmnopqrs tuvwxyz", "javascript"]
var theWord = ""
var emptyWord = ""
var guessedLetters = ""
var start = true
var used = false
var guess = 6
var win = 0
var lose = 0

function startUp() {
    theWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    for (var i = 0; i < theWord.length; i++) {
        if (theWord.charAt(i) === " ") {
            emptyWord += " "
        }
        else {
            emptyWord += "_"
        }
    };
    console.log(theWord)
    console.log(emptyWord)
}

function reset() {
     theWord = ""
     emptyWord = ""
     guessedLetters = ""
     guess = 6
    
    startUp()
}


document.onkeyup = function (event) {
    var playerkey = event.key.toLowerCase();
    var word = ""
    if (start) {
    start = false
startUp()
}
else {
    if ((playerkey === "a") || (playerkey === "b") || (playerkey === "c") || (playerkey === "d") || (playerkey === "e") || (playerkey === "f") || (playerkey === "g") || (playerkey === "h") || (playerkey === "i") || (playerkey === "j") || (playerkey === "k") || (playerkey === "l") || (playerkey === "m") || (playerkey === "n") || (playerkey === "o") || (playerkey === "p") || (playerkey === "q") || (playerkey === "r") || (playerkey === "s") || (playerkey === "t") || (playerkey === "u") || (playerkey === "v") || (playerkey === "w") || (playerkey === "x") || (playerkey === "y") || (playerkey === "z")) {
        for (var i = 0; i < theWord.length; i++) {
            if (theWord.charAt(i) === playerkey) {
                word += theWord.charAt(i)
                used = true
            }
            else {
                word += emptyWord.charAt(i)
            }
        };
        var repeat = false
        for(var i = 0; i < guessedLetters.length; i++){
            if (guessedLetters.charAt(i) === playerkey.toUpperCase()){
                repeat = true
            }
        }
        
        if ((!used) && (!repeat)) {
            guess = guess - 1
            guessedLetters += playerkey.toUpperCase() + " "
            console.log(guessedLetters)
        }
        used = false
        emptyWord = word
console.log(emptyWord + " " + guess)
        if(emptyWord === theWord){
            alert("You Win!")
            win++
            reset()
        }
        if(guess === 0){
            alert("You Lose! The answer was " + theWord)
            lose++
            reset()
        }

        
    };
}
};
