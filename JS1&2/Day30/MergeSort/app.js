// let arr1 = [1,3,5,7,10] // n
// let arr2 = [1,3,5,7,10] // m

function megeTwoSortedArrays(a1,a2)
{
    let ans = [] 
    let i = 0
    let j = 0

    while(i < a1.length && j < a2.length)
    {
        if(a1[i] < a2[j])
        {
            ans.push(a1[i])
            i++
        }
        else
        {
            ans.push(a2[j])
            j++
        }
    }

    while(i < a1.length)
    {
        ans.push(a1[i])
        i++
    }

    while(j < a2.length)
    {
        ans.push(a2[j])
        j++
    }

    return ans

}



function mergeSort(arr)
{
    if(arr.length == 1)
    {
        return arr
    }

    let mid = Math.floor(arr.length / 2) - 1
    let left = mergeSort(arr.slice(0, mid + 1))
    let right = mergeSort(arr.slice(mid + 1))
    return megeTwoSortedArrays(left, right)
} 


console.log(mergeSort([99,55,1,60,-10])) 
