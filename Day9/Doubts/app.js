// let n = 7
// let spaces = Math.floor(n / 2)
// let stars = 1

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         str += "* "
//     }
//     // spaces --
//     // stars += 2

//     if(i <= Math.floor(n / 2))
//     {
//         spaces --
//         stars += 2
//     }
//     else
//     {
//         spaces ++
//         stars -= 2
//     }
    
//     console.log(str)
// }



// let n = 5
// let spaces = n - 1
// let stars = 1

// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     let temp = 1

//     for(let j = 1; j <= spaces; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= stars; k++)
//     {
//         str += temp + " "
//         if(k <= Math.floor(stars / 2))
//         {
//             temp++
//         }
//         else
//         {
//             temp--
//         }
//     }

//     spaces--
//     stars+=2

//     console.log(str)
// }


// let n = 5;
// let temp = 1;
// for(let i = 1 ; i <= n ; i++){

//     let str = "";

//     for(let j = 1 ; j <= i ; j++){
//         str += temp;
//         if(temp == 1){
//             temp = 0
//         }
//         else{
//             temp = 1
//         }    
//     }
    
//     console.log(str);
// }





// let day = 30
// let month = 2
// let year = 2024




// if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12)
// {
//     if(day >= 1 && day <= 31)
//     {
//         console.log("Valid")
//     }
//     else
//     {
//         console.log("Invalid")
//     }
// }
// else if(month == 4 || month == 6 || month == 9 || month == 11)
// {
//     if(day >= 1 && day <= 30)
//     {
//         console.log("Valid")
//     }
//     else
//     {
//         console.log("Invalid")
//     }
// }
// else if(month == 2)
// {
//     let isLeapYear = false
//     if(year % 4 == 0 && (year % 100 != 0 || year % 400 == 0))
//     {
//         isLeapYear = true
//     }

//     if(isLeapYear)
//     {
//         if(day >= 1 && day <= 29)
//         {
//             console.log("Valid")
//         }
//         else
//         {
//             console.log("Invalid")
//         }
//     }
//     else
//     {
//         if(day >= 1 && day <= 28)
//         {
//             console.log("Valid")
//         }
//         else
//         {
//             console.log("Invalid")
//         }
//     }
// }
// else
// {
//     console.log("Invalid")
// }




// function greet(name = "User")
// {
//     console.log("Hello", name)
//     return "Hi"
// }

// console.log(greet("Shubham"))
// greet()



// const greet2 = function(name = "user"){

//     console.log("Hello", name)
//     return "qwerty"
// }

// greet2("Shubham")
// greet2()
// console.log(greet2())
// // xyz()


// const greet3 = (name = "User") => {
//     console.log("Hello", name)
//     return true
// }

// greet3("Shubham")
// let retVal = greet3()
// console.log(retVal)


// const greet = name => 1 + 34

// console.log(greet("Shubham"))












