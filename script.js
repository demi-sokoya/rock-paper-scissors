console.log('Hello World')//Test to make sure script is connected to index.html properly

//Pseudo-code for getComputerChoice
/*
FUNCTION getComputerChoice
    SET randomNumber TO random Integer between 1 and 3

    CASE OF randomNumber
        1: RETURN 'rock'
        2: RETURN 'scissors'
        3: RETURN 'paper'
        OTHERWISE: RETURN 'There is an error here'
    END CASE
END FUNCTION
*/
var humanScore = 0;
var computerScore = 0;

function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) +  1

    switch (randomNumber) {
        case 1: 
            return 'rock';

        case 2:
            return 'paper';

        case 3:
            return 'scissors';
    
        default:
            console.log("Error in number generation");
            break;
    }

}

console.log(getComputerChoice())

//Pseudo-code for getHumanChoice
/*
FUNCTION getHumanChoice
    DISPLAY "Enter your choice(rock, paper, or scissors)"
    SET userInput TO GET input
    RETURN userInput
END FUNCTION

DISPLAY getHumanChoice()

*/

function getHumanChoice() {
    var userInput = prompt("Rock, Paper, or Scissors?")
    return userInput;
}

console.log(getHumanChoice())

//Pseudo-code for playRound
/*
FUNCTION playRound(humanChoice, computerChoice) 
    SET humanChoice TO LOWERCASE(humanChoice)

    IF humanChoice EQUALS computerChoice THEN
        DISPLAY "it's a tie"
    ELSE IF (humanChoice EQUALS 'paper' AND computerChoice EQUALS 'rock') OR (humanChoice EQUALS 'rock' AND computerChoice EQUALS 'scissors') OR (humanChoice EQUALS 'scissors' AND computerChoice EQUALS 'paper') THEN
        DISPLAY "You win"
        SET humanScore TO humanScore + 1
    ELSE 
        DISPLAY "Aww You lost"
        SET computerScore TO computerScore + 1
    ENDIF
END FUNCTION



SET humanSelection TO getHumanChoice()
SET computerSelection TO getComputerChoice()

CALL playRound(humanSelection, computerSelection)
    
 */
