let choices = document.querySelectorAll(".choices")
let userScore = document.getElementById("userScore")
let compScore = document.getElementById("compScore")
let msgBox = document.getElementById("msg")

let userIndx = 0;
let userChoice = "";
let compIndx = 0;
let compChoice = "";
let isDraw = false;
let isWinner = false;
let userScoreBoard = 0;
let compScoreBoard = 0;

let possibilities = ["stone", "paper", "scissor"]

choices.forEach((choice, i) => {
    choice.addEventListener(("click"), () => {
        userIndx = i;
        checkUserChoice();
        checkComChoice();
        checkWinner();
        scoreIncreament();
        declareMsg();
    })
})


const checkUserChoice = () => {
    if (userIndx == 0 ) {
        userChoice = possibilities[0];
    } else if (userIndx == 1) {
        userChoice = possibilities[1];
    } else {
        userChoice = possibilities[2];
    }
    console.log(`User - ${userChoice}`)
    return userChoice
}

const checkComChoice = () => {
    compIndx = Math.floor(Math.random()*3);
    if (compIndx == 0 ) {
        compChoice = possibilities[0];
    } else if (compIndx == 1) {
        compChoice = possibilities[1];
    } else {
        compChoice = possibilities[2];
    }
    console.log(`Computer - ${compChoice}`)
    return compChoice
}

const checkWinner = () => {
    if (userChoice == compChoice) {
        isDraw = true;
        isWinner = false;
    } else if (userIndx == 0 && compIndx != 1) {
        isWinner = true;
        isDraw = false;
    } else if (userIndx == 1 && compIndx != 2) {
        iswinner = true;
        isDraw = false;
    } else if (userIndx == 2 && compIndx != 0) {
        isWinner = true;
        isDraw = false;
    } else {
        isWinner = false;
    }

    console.log(isWinner, isDraw)
    return(isWinner, isDraw)
}

const scoreIncreament = () => {
    if (isWinner) {
        userScoreBoard++;
    } else {
        if(!isDraw) {
            compScoreBoard++;
        }
    }
    userScore.innerText = userScoreBoard;
    compScore.innerHTML = compScoreBoard
}

const declareMsg = () => {
    if (isWinner) {
        msgBox.innerHTML = `Your Choice ${userChoice} Won`
        msgBox.style.backgroundColor = "green"
    } else {
        if (isDraw) {
            msgBox.innerHTML = `Your Choice ${userChoice} and Computer's Choice ${compChoice} Draw`
            msgBox.style.backgroundColor = "black"
        } else {
            msgBox.innerHTML = `Your Choice ${userChoice} Lost`
            msgBox.style.backgroundColor = "red"
        }
    }
}