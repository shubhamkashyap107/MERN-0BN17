// let arr = [1,2,3,4,5,[11,22,33,44,[101,102,103,104, [-1,-2,-3,"ANS"]]]]


// let innerArray = arr[5]
// console.log(innerArray)
// console.log(innerArray[2])


// console.log(arr[5][2])
// console.log(arr[5][4][2])
// console.log(arr[5][4][4][3])


// let arr = [[1,2,3], [4,5,6], [7,8,9, [11,12,13,14, [99,100, [1,2,3, [1,2,4, ["ANS"]]]]]]] 
// console.log(arr[2])

// let flatArr = arr.flat(99999999)

// console.log(arr)
// console.log(flatArr)



// let arr = [1,2,3,4,5,6,7]

// for(let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i])
// }











// let arr2 = [[1,2,3],[4,5,6],[7,8,9]]



// for(let i = 0; i < arr2.length; i++)
// {
//     let innerArray = arr2[i]

//     for(let j = 0; j < innerArray.length; j++)
//     {
//         console.log(innerArray[j])
//     }

// }



let arr2 = [[1,2,3,99,100,101],[4,5,6],[7,8,9]]
for(let i = 0; i < arr2.length; i++)
{
    let str = ""

    for(let j = 0; j < arr2[i].length; j++)
    {
        // console.log(arr2[i][j])
        str += arr2[i][j] + " "
        // str += "* "
    }

    console.log(str)
}

let arr = [[1,2,3],[4,5,6],[7,8,9,10,11,12]]
for(let item of arr)
{
    let str = ""

    for(let something of item)
    {
        // console.log(something)
        str += something + " "
    }

    console.log(str)
}




