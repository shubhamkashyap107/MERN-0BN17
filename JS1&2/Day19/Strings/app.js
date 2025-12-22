// let str = "this is a sample string"


// // let arr = str.split(" ")
// // console.log(arr.length)

// let ans = 0
// for(let i = 0; i < str.length; i++)
// {
//     if(str[i] == " ")
//     {
//         ans++
//     }
// }

// console.log(ans + 1)


// let str = "abc"
// let arr = ["ab", "abd", "cacb", "cabef"]
// let ans = 0

// for(let item of arr)
// {
//     let isGoodString = true
//     for(let i = 0; i < item.length; i++)
//     {
//         if(!str.includes(item[i]))
//         {
//             isGoodString = false
//             break
//         }
//     }
//     if(isGoodString == true)
//     {
//         ans++
//     }
// }

// console.log(ans)




// let str = "abc_def_ghi_ijk"
// let ans = [str[0]]

// for(let i = 1; i < str.length; i++)
// {
//     if(str[i] == "_")
//     {
//         continue
//     }
//     else
//     {
//         if(str[i - 1] == "_")
//         {
//             ans.push(str[i].toUpperCase())
//         }
//         else
//         {
//             ans.push(str[i])
//         }
//     }
// }

// console.log(ans.join(""))





// for(let i = 97; i <= 122; i++)
// {
//     console.log(String.fromCharCode(i))
// }



let str = "HelloWorld12"
let ans = []

for(let i = 0; i < str.length; i++)
{
    if(str[i] >= "a" && str[i] <= "z")
    {
        ans.push(str[i].toUpperCase())
    }
    else if(str[i] >= "A" && str[i] <= "Z")
    {
        ans.push(str[i].toLowerCase())
    }
    else
    {
        ans.push(str[i])
    }
}

console.log(ans.join(""))







