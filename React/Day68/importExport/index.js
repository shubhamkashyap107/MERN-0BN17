function sayHi()
{
    console.log("Hello World")
}

const age = 32

function greet()
{
    console.log("Namaste")
}

// module.exports = sayHi
// module.exports = greet
// module.exports = age


module.exports = {
    sayHi, age, greet
}

console.log(module)