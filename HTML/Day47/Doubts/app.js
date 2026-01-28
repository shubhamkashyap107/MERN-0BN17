// let str = "abcd"
// let ans = []

// for(let i = 0; i < str.length; i++)
// {
//     let ss = ""
//     for(let j = i; j < str.length; j++)
//     {
//         ss += str[j]
//         // console.log(ss)
//         ans.push(ss)
//     }
// }

// console.log(ans)




// function subStrings(str, si)
// {
//     if(si == str.length)return
//     let ss = ""
//     for(let i = si; i < str.length; i++)
//     {
//         ss += str[i]
//         console.log(ss)
//     }
//     subStrings(str, si + 1)
// }


// subStrings("abcd", 0)



const AnagramStrings = ( StringArray = ['cat', "tea", 'pet', "tac", 'act', "eat"], Arr = ["cat", "tca", "eee", "tea"]) => {

    const map = new Map()

    for(let item of StringArray)
    {
        let str = item.split("").sort().join("")
        if(map.has(str))
        {
            map.set(str, [...map.get(str), item])
        }
        else
        {
            map.set(str, [item])
        }
    }

    for(let item of Arr)
    {
        let str = item.split("").sort().join("")
        if(map.has(str))
        {
            console.log(map.get(str).sort().join(" "))
        }
        else
        {
            console.log(-1)
        }
    }

};

AnagramStrings()





let arr = [1,2,3,4]

let newArr = [...arr, 5,6,7]
console.log(newArr)



