console.log("Hello world")

for(let i = 1; i <= 10; i++)
{
    let str = ""

    for(let j = 1; j <= 10; j++)
    {
        str += "* "
    }

    console.log(str)
}


setTimeout(() => {
    console.log("PL")
}, 2000)


alert("Hello from me")