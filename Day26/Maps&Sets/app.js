// const mySet = new Set()

// mySet.add("a") // adds a value to the set.
// mySet.add("b")
// mySet.add("c")
// mySet.add("c")
// mySet.add("c")


// mySet.delete("w") // deletes given value from the set if present.

// mySet.has("t") // checks whether a value is present in the set and returns a boolean.

// mySet.clear() // removes all values from the set.

// First way of looping over set
// mySet.forEach(function(item){
//     console.log(item)
// })

// Second way of looping over set
// const arr = mySet.entries()
// for(let item of arr)
// {
//     console.log(item)
// }

// Third way of looping over set
// const newArr = mySet.values()
// for(let item of newArr)
// {
//     console.log(item)
// }

// console.log(mySet, mySet.size)



// let arr = [1,2,3,4,5,6,1,2,3,4,5,6]
// let mySet = new Set()

// for(let item of arr)
// {
//     mySet.add(item)
// }


// console.log(mySet)


// let arr = [1,2,3,4,5,6,1,2,3,4,5,6]
// let ans = []

// let mySet = new Set(arr)

// for(let item of mySet.values())
// {
//     ans.push(item)
// }

// let ans = Array.from(mySet)


// console.log(ans)

// const mySet = new Set()
// mySet = new Set()



// maps

// const myMap = new Map()

// myMap.set("name", "shubham")
// myMap.set("age", 25)
// myMap.set("isYoung", true)
// console.log(myMap.has("age"))

// console.log(myMap)

// console.log(myMap.get("age"))

// myMap.clear()
// myMap.delete("isYoung")
// console.log(myMap)
// console.log(myMap[0])

// for(let item of myMap)
// {
//     console.log(item)
// }

// myMap.forEach((v, k) => {
//     console.log(k, v)
// })








let arr = [1,2,3,4,1,2,3,1,2,1,10]
const map = new Map()



// for(let item of arr)
// {
//     if(map.has(item))
//     {
//         map.set(item, map.get(item) + 1)
//     }
//     else
//     {
//         map.set(item, 1)
//     }
// }



for(let item of arr)
{
    map.set(item, map.get(item) == undefined ? 1 : map.get(item) + 1)
}


console.log(map)


