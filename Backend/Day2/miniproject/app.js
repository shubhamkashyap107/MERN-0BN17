const fs = require("fs")


const fileName = process.argv[2]
const operation = process.argv[3] // create, update, read, delete
const data = process.argv[4]

switch(operation)
{
    case "create":
        if(!fileName)
        {
            throw new Error("Please Enter a valid filename...")
        }
        fs.writeFileSync(fileName, data || "")
        break
}