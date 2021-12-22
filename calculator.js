const prompt = require("prompt-sync")(); // Please don't touch me :)

// The prompt method allows us to take an input from the user.
// Run the code to see how to use prompt.
const name = prompt("What's your name? ");
console.log(`Hi ${name}! Welcome to the calculator! Let's math.`);


let firstNum = prompt("Type your first number:")
if (!(firstNum == 0 || firstNum < 0 || firstNum > 0)){
    console.log("You dun goofed, that's not a number. Now you have to restart everything because we haven't learned loops yet")
}

console.log("Great! Your first number is", firstNum, "!")

let secondNum = prompt("Type your second number:")
if (!(secondNum == 0 || secondNum < 0 || secondNum > 0)){
    console.log("You dun goofed, that's not a number. Now you have to restart everything because we haven't learned loops yet")
}
console.log("Great! Your second number is", secondNum, "!")

let operator = prompt("Type your operator (+ or - or * or /):")
if (!(operator == "+" || operator == "-" ||operator == "*" ||operator == "/")) {
    console.log("You dun goofed, that's not an operator. Now you have to restart everything because we haven't learned loops yet")
}
console.log("Great! Your operator is", operator, "!")


//I tried making it so the operator can become an actual arithmetic method from a string, 
//but it looks like there's no way to make that happen without going with if else statements. Without going evil at least.
//Switch is the cleaner way methinks.
let finalresult = eval((parseInt(firstNum), operator, parseInt(secondNum)))
console.log("Your result is", finalresult, ".")
