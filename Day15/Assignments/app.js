let arr1 = [[1,1,1], [2,2,2], [3,3,3]]
let arr2 = [[1,1,1], [2,2,2], [3,3,3]]


for(let i = 0; i < arr1.length; i++)
{
    let str = ""
    for(let j = 0; j < arr1.length; j++)
    {
        let temp = 0
        for(let k = 0; k < arr1.length; k++)
        {
            temp += arr1[i][k] * arr2[k][j]
        }
        str += temp + " "
    }
    console.log(str)
}