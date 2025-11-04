
// using extra space

var arr = [1,2,3,4,5,6]
let nArr = []

for(let i = arr.length - 1; i >= 0; i--)
{
    nArr.push(arr[i])
}


// for(let item of arr)
// {
//     nArr.unshift(item) // dont use unshift(inefficient)
// }


// using no extra space
var arr = [1,2,3,4,5,6]


for(let i = 0; i < Math.floor(arr.length / 2); i++)
{
    let temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
}

console.log(arr)



// two pointer approach(uses no extra space)
var arr = [1,2,3,4,5,6]
let start = 0
let end = arr.length - 1


while(start < end)
{
    let temp = arr[start]
    arr[start] = arr[end]
    arr[end] = temp

    start++
    end--
}

console.log(arr)
