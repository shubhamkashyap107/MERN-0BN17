// let arr = [1,7,33,33,-10,0,101]

// console.log(arr.includes(1110))
// console.log(arr.indexOf(33))
// console.log(arr.indexOf(303))

// let arr = [5,10,15,20,25,30,100, 30]
// let target = 30

// function linearSearch(arr, target)
// {
//     for(let i = 0; i < arr.length; i++)
//     {
//         if(arr[i] == target)
//         {
//             return i
//         }
//     }
//     return -1
// }

// console.log(linearSearch(arr, target))


















// let isFound = false

// for(let i = 0; i < arr.length; i++)
// {
//     if(arr[i] == target)
//     {
//         console.log(i)
//         isFound = true
//         break
//     }
// }


// if(isFound == false)
// {
//     console.log(-1)
// }








// let str = "aoudhfmz"
// let target = "z"


// function linearSearchOnStrings(str, target)
// {
//     for(let i = 0; i < str.length; i++)
//     {
//         // if(str.charAt(i) == target)
//         if(str[i] == target)
//         {
//             return i
//         }
//     }

//     return -1

// }

// console.log(linearSearchOnStrings(str, target))







function binarySearch(arr, target)
{
    let si = 0
    let ei = arr.length - 1

    while(si <= ei)
    {
        let mid = Math.floor((si + ei) / 2)

        if(arr[mid] == target)
        {
            return mid
        }
        else if(target > arr[mid])
        {
            si = mid + 1
        }
        else
        {
            ei = mid - 1
        }
    }
    return -1
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9], 9))





