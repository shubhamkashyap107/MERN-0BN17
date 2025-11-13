// let str = "Shubham"

// let val = str.slice(3)
// let val = str.slice(3, 6)
// let val = str.slice(-4,-1)
// str.splice() not possible
// str.toUpperCase()
// console.log(str)


// let str = "my name is xyz"

// console.log(str.includes("Q"))
// console.log(str.includes("qwret"))
// console.log(str.includes("m", 6))
// console.log(str.concat("and hi hoow are you"))
// console.log(str.endsWith("xyz"))
// console.log(str.startsWith("myfgudatysdf"))

// let email  = "shubham@yahoo.com"
// if(email.endsWith("@gmail.com"))
// {
//     console.log("ALlowed")
// }
// else
// {
//     console.log("Not allowed")
// }

// let str = "my name is xyz"
// console.log(str.indexOf("m", 1))


// let msg = "           hello ji how are you              "
// console.log(msg)
// console.log(msg.trim())
// console.log(msg.trimStart())
// console.log(msg.trimEnd())
// console.log(msg.replaceAll(" ", ""))



let str = "HelloMyNameIsAlexa"


let i = 0

while(i < str.length)
{
    if(str[i] >= "A" && str[i] <= "Z")
    {
        let j = i + 1
        let temp = str[i]

        while(str[j] >= "a" && str[j] <= "z")
        {
            temp += str[j]
            j++
        }
        console.log(temp)
        i = j
    }
    // i++
}






























