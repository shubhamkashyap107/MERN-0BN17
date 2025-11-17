// let n = 100000
// console.log(n)



// let n = 999999
// for(let i = 1; i <= n; i++)
// {
//     console.log(i)
// }




// let n = 1000

// for(let i = 1; i <= n; i++)
// {

//     for(let j = 1; j <= n; j++)
//     {
//         console.log(i, j)
//     }


// }




// let n = 1000

// for(let i = 1; i <= n; i++)
// {
//     for(let j = 1; j <= n; j++)
//     {
//         for(let k = 1; k <= n; k++)
//         {
//             console.log(i, j, k)
//         }
//     }
// }




// let arr = [1,2,3,4,5,6]

// let si = 0
// let ei = arr.length - 1

// while(si < ei)
// {
//     let temp = arr[si]
//     arr[si] = arr[ei]
//     arr[ei] = temp

//     si++
//     ei--
// }


// console.log(arr)


// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }



// let arr = [[1,2,3],[4,5,6],[7,8,9]]
// console.log(arr)

// for(let i = 0; i < arr.length; i++)
// {
//     let si = 0
//     let ei = arr[i].length - 1

//     while(si < ei)
//     {
//         let temp = arr[i][si]
//         arr[i][si] = arr[i][ei]
//         arr[i][ei] = temp

//         si++
//         ei--
//     }
// }

// console.log(arr)

// for(let i = 0; i < arr.length; i++)
// {
//     for(let j = 0; j < arr[i].length; j++)
//     {
//         console.log(arr[i][j])
//     }
// }


// let n = 5
// let m = 10

// let str = ""
// for(let i = 1; i <= n; i++)
// {
//     str += "*"
// }
// console.log(str)


// for(let i = 1; i <= n; i++)
// {
//     let str = ""
//     for(let j = 1; j <= m; j++)
//     {
//         str += "* "
//     }
//     console.log(str)
// }















// for(let i = 1; i <= n; i++)
// {
//     let str = ""

//     for(let j = 1; j <= i; j++)
//     {
//         str += "* "
//     }

//     console.log(str)
// }











let arr = [1,2,3,4,5,6]
let ans = []


for(let item of arr)
{
    ans.push(item ** 2)
}

console.log(ans)