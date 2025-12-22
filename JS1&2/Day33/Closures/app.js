// function outer()
// {

//     function printAge()
//     {
//         // let age = 25
//         console.log(age)
//     }

//     printAge()
//     let age = 32

// }


// outer()



// function outer()
// {
//     let age = 32

//     return () => {
//         console.log(age)
//     }

// }



// let fn = outer()
// fn()







// EXAMPLE


function counter(operation)
{
    let count = 0

    if(operation == "inc")
    {
        return () => {
            count++
            console.log(count)
        }
    }
    else if(operation == "dec")
    {
        return () => {
            count--
            console.log(count)
        }
    }
    else if(operation == "res")
    {
        return () => {
            count = 0
            console.log(count)
        }
    }

}



// const increment = counter("inc") // count = 0 -> 1 -> 2 -> 3 -> 4 -> 5
// const decrement = counter("dec") // count = 0 -> -1 -> -2 -> -3
// const reset = counter("res") // count = 0 -> 0




// increment()
// increment()
// increment()
// increment()

// decrement()
// decrement()
// decrement()


// increment()


// reset()







function counter()
{
    let count = 0

    return {
        inc : () => {
            count++
            console.log(count)
        },
        dec : () => {
            count--
            console.log(count)
        },
        res : () => {
            count = 0
            console.log(count)
        }
    }
}













// const myCounter = counter()
// myCounter.inc()
// myCounter.inc()
// myCounter.inc()
// myCounter.inc()
// myCounter.inc()

// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()
// myCounter.dec()

// myCounter.res()



// function secretMessage(msg)
// {
//     let message = msg

//     return () => {
//         console.log(message)
//     }
// }


// const setter = secretMessage("Hello")
// setter()
// setter()
// setter()
// setter()

// const setter2 = secretMessage("Hi")
// setter2()
// setter2()
// setter2()





function changePassword(pw)
{
    let password = "12345678"

    if(pw.length >= 8 && pw.length <= 20)
    {
        password = pw
    }

    return () => {
        console.log(password)
    }
}

// let cp = changePassword("qwertyuiop")
let cp = changePassword("zxcvb")
cp()















