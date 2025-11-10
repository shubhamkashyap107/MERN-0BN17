// let arr = [[1,2,3],[4,5,6],[7,8,9]]



// for(let item of arr)
// {
//     let si = 0
//     let ei = item.length - 1

//     while(si < ei)
//     {
//         let temp = item[si]
//         item[si] = item[ei]
//         item[ei] = temp

//         si++
//         ei--
//     }
// }


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

// for(let i = 0; i < arr.length; i++)
// {
//     let innerArray = arr[i]
//     let si = 0
//     let ei = innerArray.length - 1

//     while(si < ei)
//     {
//         let temp = innerArray[si]
//         innerArray[si] = innerArray[ei]
//         innerArray[ei] = temp

//         si++
//         ei--
//     }
// }

// console.log(arr)



// boundary traversal



let arr = [[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]


function boundaryTraversal(m = arr.length, n = arr[0].length, matrix = arr) {
  
	// Write your code here

    for(let i = 0; i < n; i++)
    {
        console.log(arr[0][i])
    }
	
    for(let i = 1; i < m; i++)
    {
        console.log(arr[i][n - 1])
    }

    for(let i = n - 2; i >= 0; i--)
    {
        console.log(arr[m - 1][i])
    }

    for(let i = n - 2; i >= 1; i--)
    {
        console.log(arr[i][0])
    }

}

boundaryTraversal()
