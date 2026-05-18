const http = require("http")

const users = [
  {
    id: 1,
    name: "Shubham Kashyap",
    email: "shubham@example.com",
    age: 25,
    role: "Developer",
  },
  {
    id: 2,
    name: "Aman Verma",
    email: "aman@example.com",
    age: 23,
    role: "Designer",
  },
  {
    id: 3,
    name: "Priya Sharma",
    email: "priya@example.com",
    age: 27,
    role: "Manager",
  },
  {
    id: 4,
    name: "Rohit Singh",
    email: "rohit@example.com",
    age: 24,
    role: "Tester",
  },
];


// const server = http.createServer((req, res) => {
//     if(req.url.toLowerCase() == "/home")
//     {
//         res.end("Welcome User")
//     }
//     else if(req.url.toLowerCase() == "/about")
//     {
//         res.end("My name is http")
//     }
//     else if(req.url.toLowerCase() == "/users")
//     {
//         res.end(JSON.stringify(users))
//     }
//     else if(req.url.toLowerCase().includes("/users"))
//     {
//         const name = req.url.slice(7)
//         const foundObj = users.find((item) => {
//             return item.name.toLowerCase().includes(name)
//         })

//         res.end(JSON.stringify(foundObj))
//     }
//     else
//     {
//         res.end("Not Found")
//     }
// })


const server = http.createServer((req, res) => {
    if(req.url == "/users" && req.method == "GET")
    {
        res.end(JSON.stringify(users))
    }
    else if(req.url == "/users" && req.method == "DELETE")
    {
        users.pop()
       res.end(JSON.stringify(users))
    }
    else
    {
        res.writeHead(404)
        res.end("Not Found")
    }
})



server.listen(8080, () => {
    console.log("Server running...")
})

