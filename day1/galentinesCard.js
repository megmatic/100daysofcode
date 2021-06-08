// day 1 of 100 (javascript) - create a project that uses print, input, variables, and string concatenation

const input = require("readline-sync");

console.log("Welcome to the Galentine's Day Card Generator! Leslie Knope would be proud.")


const fromName = input.question("What's your name?\n")
const toName = input.question("What's your galentine's name?\n")
console.log("\n**********\n\nHere's your Galentine's Day card: \n\n")
console.log(`Dear ${toName}\n`)
console.log("You are the poetic noble land mermaid to my rainbow infused space unicorn. Happy Galentine's day!")
console.log(`\nYour galentine,\n\n${fromName}`)
console.log("\n**********\n")
