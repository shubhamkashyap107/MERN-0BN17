function quickSort(arr)
{
    if(arr.length == 1 || arr.length == 0)
    {
        return arr
    }

    let pivot = arr[arr.length - 1]
    let sm = []
    let lg = []

    for(let i = 0; i < arr.length - 1; i++)
    {

        if(arr[i] < pivot)
        {
            sm.push(arr[i])
        }
        else
        {
            lg.push(arr[i])
        }
    }

    let sortedSm = quickSort(sm)
    let sortedLg = quickSort(lg)


    return [...sortedSm, pivot, ...sortedLg]
}

console.log(quickSort([1,2,3,4,5,6,])) // [-10,0,1,3,99,100]