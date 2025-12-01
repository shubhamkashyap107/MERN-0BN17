let arr = [1,2,3,4,5] 

// worst -> will always run upto (n - 1) ** 2
for(let i = 0; i < arr.length - 1; i++)
{
    for(let j = 0; j < arr.length - 1; j++)
    {
        if(arr[j] > arr[j + 1]) //         if(arr[j] < arr[j + 1]) for descending order
        {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }

}

// better -> will run lot less than (n-1)**2
for(let i = 0; i < arr.length - 1; i++)
{
    for(let j = 0; j < arr.length - 1 - i; j++)
    {
        if(arr[j] > arr[j + 1])
        {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
        }
    }
}

//best -> will stop execution if no swaps happen
for(let i = 0; i < arr.length - 1; i++)
{
    let isSorted = true
    for(let j = 0; j < arr.length - 1 - i; j++)
    {
        if(arr[j] > arr[j + 1])
        {
            let temp = arr[j]
            arr[j] = arr[j + 1]
            arr[j + 1] = temp
            isSorted = false
        }
    }
    if(isSorted == true)
    {
        break
    }
}


console.log(arr)