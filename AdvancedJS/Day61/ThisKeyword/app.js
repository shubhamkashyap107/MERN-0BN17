// console.log(this) // window

// function xyz()
// {
//     // "use strict"
//     console.log(this) // window in case of non strict mode
// }

// xyz()

// const fn = () => {
//     console.log(this) // arrow fns does not have their own this, sp they depend upon their parent
// }

// fn()



// function outer()
// {
//     "use strict"

//     console.log(this)

//     const inner = () => {
//         console.log(this)
//     }
//     inner()
// }


// outer()


// objects

// let obj = {
//     naam : "Ramesh",
//     age : 40,   
//     showThis : function(){
//         console.log(this)
//     },
//     showThis2 : () => {
//         console.log(this)
//     },
//     showThis3 : function()
//     {
//         const inner = () => {
//             console.log(this)
//         }
//         inner()
//     },
//     showThis4 : () => {
//         function inner()
//         {
//             console.log(this)
//         }
//         inner()
//     }
// }


// function xyz()
// {
//     console.log(this)
// }

// obj.showThis()
// obj.showThis2()
// obj.showThis3()
// obj.showThis4()

let person1 = {
    name : "Aman",
    age : 23,
    introduce : function(city) {
        // console.log(this)
        console.log(`My name is ${this.name} and my age is ${this.age} and i live in ${city}`)
    }
}

let person2 = {
    name : "Kartik",
    age : 26
}

function introduction(city, pet)
{
    console.log(`My name is ${this.name} and my age is ${this.age} and i live in ${city} and i have a ${pet}`)
}


// person1.introduce("Delhi")
// person1.introduce.call(person2)
// introduction()
// introduction.call(person1, "Delhi")
// introduction.call(person2, "Pune")
// introduction.apply(person1, ["Delhi", "Dog"])
const fn = introduction.bind(person2, "Delhi", "Cat")
fn()