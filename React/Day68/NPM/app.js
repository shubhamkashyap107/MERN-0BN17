import chalk from 'chalk';
import figlet from "figlet";
import cowsay from "cowsay"

// console.log(chalk.blue("Hello world"))
// console.log(chalk.bgBlue("Hello world"))
// console.log(chalk.blue("Hello world"))
// console.log("Hello world")


figlet("Hello JavaScript", (err, data) => {
    console.log(chalk.red(data))
})



console.log(cowsay.say({
    text : "Hello jiiii",
    e : "OO",
    T : "D "
}));