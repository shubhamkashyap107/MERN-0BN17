// var a = 10
// var b = "qwerty"
// var c = true


// console.log(a)
// console.log(b)
// console.log(c)






// var a = 10

// function hello()
// {
//     var b = 22
//     console.log(b)
// }

// hello()
// console.log(a)





// var a = 10
// var b = 32

// function one()
// {
//     var a = 22
//     console.log(a)
// }

// function two()
// {
//     console.log(b)
// }

// console.log(a)
// console.log(b)
// two()
// one()



var a = 10

function outer()
{
    function inner()
    {
        console.log("HEHE")
        return true
    }
    var a = inner()
    console.log(a)
}


console.log(a)
outer()








