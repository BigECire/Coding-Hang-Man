
var wordBank = ["abcdefghi jklmnopqrs tuvwxyz", "javascript"]
var theWord = ""
var emptyWord = ""

function startUp(){
    theWord = wordBank[Math.floor(Math.random() * wordBank.length)]
    for(var i = 0;i < theWord.length;i++){
        if (theWord.charAt(i) === " ") {
        emptyWord += " "
    }
    else{
        emptyWord += "_"
    }
    };
    console.log(theWord)
    console.log(emptyWord)
}

startUp()

document.onkeyup = function(event) {
var playerkey = event.key.toLowerCase();
var word = ""
if((playerkey === "a") || (playerkey === "b") || (playerkey === "c") || (playerkey === "d") || (playerkey === "e") || (playerkey === "f") || (playerkey === "g") || (playerkey === "h") || (playerkey === "i") || (playerkey === "j") || (playerkey === "k") || (playerkey === "l") || (playerkey === "m") || (playerkey === "n") || (playerkey === "o") || (playerkey === "p") || (playerkey === "q") || (playerkey === "r") || (playerkey === "s") || (playerkey === "t") || (playerkey === "u") || (playerkey === "v") || (playerkey === "w") || (playerkey === "x") || (playerkey === "y") || (playerkey === "z")){
for(var i = 0;i < theWord.length;i++){
    if (theWord.charAt(i) === playerkey) {
    word += theWord.charAt(i)
}
else{
    word += emptyWord.charAt(i)
}


};
emptyWord = word
console.log(emptyWord)
};
};