let arr = [6,5,4,3,2,1]


// for(let i = 0; i < arr.length - 1; i++)
// {
//     let j = i + 1
//     while(j > 0)
//     {
//         console.log("OK")
//         if(arr[j] < arr[j - 1])
//         {
//             let temp = arr[j]
//             arr[j] = arr[j - 1]   
//             arr[j - 1] = temp

//         }
//         j--
//     }
// }




for(let i = 0; i < arr.length - 1; i++)
{
    let j = i + 1
    while(j > 0 && arr[j] < arr[j - 1])
    {
        console.log("OK")

        let temp = arr[j]
        arr[j] = arr[j - 1]   
        arr[j - 1] = temp

        j--
    }
}

console.log(arr)