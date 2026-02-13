let n = 4
let num = 1

for(let i = 1; i <= n; i++)
{
    let str = ""

    for(let j = 1; j <= n; j++)
    {
        // str += "* "
        if(i == 1 || i == n || j == 1 || j == n)
        {
            str += num + " "
            num++

        }
        else
        {
            str += "  "
        }

    }

    console.log(str)
}