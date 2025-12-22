// * * * *
// * * * 
// * *
// *

let n = Number(prompt("Enter n")) //3

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n - i + 1; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }


// dekho bhai hum acciojob me hum placement assistance
// dete ahin to hum jo bhi padhte hai vo real world experience ke
// sath padhate hai taki apki placement hojaye jaise ye capstone project

// 6-8 months ka course 


// demo class book karlo

// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n - i; j++)
//     {
//         str += "  "
//     }

//     for(let k = 1; k <= i; k++)
//     {
//         str += "* "
//     }

//     console.log(str)

// }






// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= n; j++)
//     {
//         if(i == 1 || i == n || j == 1 || j == n)
//         {
//             str += "* "
//         }
//         else
//         {
//             str += "  "
//         }
//     }

//     console.log(str)
// }



for(let i = 1; i <= n; i++)
{
    let str = ""

    for(let j = 1; j <= i; j++)
    {
        // str += "* "

        if(j == 1 || i == n || j == i)
        {
            str += "* "
        }
        else
        {
            str += "  "
        }
    }

    console.log(str)
}