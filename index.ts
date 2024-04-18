#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number

//user input for guessing number

// compairing the num of comupter and user generate number and show the result
const randomNumber =Math.floor(Math.random() * 15 +1); 

const answers = await inquirer.prompt([

    {
        name: "userGuessedNumber",
        type: "number",                           
        message: "Please guess a number between 1-15: ",
    }
]);
if (answers.userGuessedNumber === randomNumber ){
    console.log("Congragulations! you guessed right number.")
}else {
    console.log("You guessed the wrong number")
}

