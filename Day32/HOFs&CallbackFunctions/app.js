function a()
{
    return () => {
        console.log("Hello from inner function")
    }
}

// const fn = a()
// fn()


// a()()


// function b(fn)
// {
//     fn()
// }


// function kuchbhi()
// {
//     console.log("Hello from kuchbhi fn")
// }

// b(kuchbhi)



// b(() => {
//     console.log("Hello from fn")
// })




function c(fn)
{
    fn()
    return () => {
        console.log("Hello 1")
    }
}



// c(() => {
//     console.log("Hello 2")
// })()





// arr = [5,4,3,2,1]
// arr.sort(() => {

// })



function work(success, failure)
{
    let isWorkDone = false

    if(isWorkDone)
    {
        success()
    }
    else
    {
        failure()
    }
}


work(() => alert("DONE"), () => alert("FAIL"))





















