var userScore = 0;
var compScore = 0;
const userScore_span = document.getElementById("user-score");
const compScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");




// Generates a random computer choice
function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber]; 
}

// Game method
function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case "pr":
        case "rs":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

// Handles rock paper scissors results

function convertToWord(letter) {
    if (letter == 'r') return "Rock";
    if (letter == 'p') return "Paper";
    if (letter == 's') return "Scissors";
}
function win(user, computer) {
    userScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    //result_p.innerHTML = convertToWord(user) + " beats " + convertToWord(computer) + ". User wins!";
    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} beats ${convertToWord(computer)} ${smallCompWord}. You Win! 🏆`;
    userChoice_div.classList.add('greenGlow');
    /*setTimeout(function(){
        userChoice_div.classList.remove('greenGlow')}, 1000);
    */
    setTimeout(() => userChoice_div.classList.remove('greenGlow'), 750);
}


function lose(user, computer) {
    compScore++;
    compScore_span.innerHTML = compScore;
    userScore_span.innerHTML = userScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    //result_p.innerHTML = convertToWord(computer) + " beats " + convertToWord(user) + ". You Lose!";
    result_p.innerHTML = `${convertToWord(computer)} ${smallCompWord} beats ${convertToWord(user)} ${smallUserWord}. You Lose... ❌`;
    userChoice_div.classList.add('redGlow');
    /*setTimeout(function() { 
        userChoice_div.classList.remove('redGlow')}, 1000);
    */
   setTimeout(() => userChoice_div.classList.remove('redGlow'), 750);
}
function draw(user, computer) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(user);
    //result_p.innerHTML = " Both players selected " + convertToWord(user) + ". Its a draw!";
    result_p.innerHTML = `${convertToWord(user)} ${smallUserWord} ties ${convertToWord(computer)} ${smallCompWord}. Its a Draw! 💥`;
    userChoice_div.classList.add('orangeGlow');
    /*setTimeout(function() {
        userChoice_div.classList.remove('orangeGlow')}, 1000);
    */
   setTimeout(() => userChoice_div.classList.remove('orangeGlow'), 750);
}


// Main method
function main() {
    // Add event listeners
    rock_div.addEventListener('click', () => game("r"));
    /*rock_div.addEventListener('click', function() {
        game("r");
    })*/
    paper_div.addEventListener('click', () => game("p"));
    /*paper_div.addEventListener('click', function() {
        game("p");
    })*/
    scissors_div.addEventListener('click', () => game("s"));
    /*scissors_div.addEventListener('click', function() {
        game("s");
    })*/

}

// Code is commented out to show the original ES5 and the new ES6

// Call methods
main();
