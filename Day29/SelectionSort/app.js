let arr = [1,2,3,4,5,6] 

for(let i = 0; i < arr.length - 1; i++)
{
    let minIdx = i

    for(let j = i + 1; j < arr.length; j++)
    {
        console.log("Loop Chala")
        if(arr[j] < arr[minIdx]) //  if(arr[j] > arr[minIdx]) for descending order
        {
            minIdx = j
        }
    }

    let temp = arr[i]
    arr[i] = arr[minIdx]
    arr[minIdx] = temp
}

console.log(arr)