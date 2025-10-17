// print tables from 1 to 100


// for(let j = 1; j <= 100; j++)
// {
//     for(let i = 1; i <= 10; i++)
//     {
//         console.log(`${j} X ${i} = ${j * i}`)
//     }
// }








// let n = 2


// for(let j = 1; j <= n; j++)
// {
//     let str = ""
//     for(let i = 1; i <= n; i++)
//     {
//         str += "* "
//     }
//     console.log(str)

// }


// let n = Number(prompt("Enter N"))


// for(let j = 1; j <= n; j++)
// {
//     let str = ""
 
//     for(let i = 1; i <= n; i++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }


// let row = prompt("ENter row number")
// let col = prompt("ENter col number")

// for(let i = 1; i <= row; i++)
// {
//     let str = ""
    
//     for(let j = 1; j <= col; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }



let n = prompt()

for(let i = 1; i <= n; i++)
{
    let str = ""

    for(let j = 1; j <= i; j++)
    {
        str += "* "
    }

    console.log(str)
}