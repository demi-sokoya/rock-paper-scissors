console.log('Hello World')//Test to make sure script is connected to index.html properly

//Pseudo-code
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


function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) +  1

    switch (randomNumber) {
        case 1: 
            return 'rock';
            break;

        case 2:
            return 'paper';
            break;

        case 3:
            return 'scissors';
            break;
    
        default:
            console.log("Error in number generation");
            break;
    }

}

console.log(getComputerChoice())

//Pseudo-code
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
