// let arr = [1,2,3,4,5]

// for(let i = 0; i < arr.length; i++)
// {
//     // let temp = []
//     let sum = 0

//     for(let j = i; j < arr.length; j++)
//     {
//         // temp.push(arr[j])
//         // console.log(temp)
//         sum += arr[j]
//         console.log(sum)
//     }

// }




function splitArray (N = 6, arr = [1,2,3,4,5,5]){
	// Write your code here
	let sum = 0
	for(let item of arr)
	{
		sum += item
	}
	let temp = 0
	let sp = -1
	for(let i = 0; i < N; i++)
	{
		temp += arr[i]
		if(temp == sum / 2)
		{
			sp = i
		}
	}

	if(sp == -1)
	{
		console.log("Not Possible")
	}
	else
	{
		console.log(arr.slice(0, sp + 1).join(" "))
		console.log(arr.slice(sp + 1).join(" "))
	}

}
splitArray()