// let arr = [-10,1,11,22,54,101]
// let target = -101

// function binarySearch(arr, target)
// {
//     let si = 0
//     let ei = arr.length - 1

//     while(si <= ei)
//     {
//         let mid = Math.floor((si + ei) / 2)

//         if(arr[mid] == target)
//         {
//             return mid
//         }
//         else if(target > arr[mid])
//         {
//             si = mid + 1
//         }
//         else
//         {
//             ei = mid - 1
//         }
//     }

//     return -1
// }

// console.log(binarySearch(arr, target))





let arr = [99,80,56,14,10,0]
let target = 0

function binarySearchOnDecOrder(arr, target)
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
            ei = mid - 1
        }
        else
        {
            si = mid + 1
        }
    }

    return -1
}

console.log(binarySearchOnDecOrder(arr, 999))









