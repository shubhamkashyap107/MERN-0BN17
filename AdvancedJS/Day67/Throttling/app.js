const inputBar = document.getElementById("ip")

function throttle(fn, delay)
{
    let prev = 0 // time of the last event fire


    return function()
    {
        let now = Date.now() // current time

        if(now - prev > delay)
        {
            fn()
            prev = Date.now()
        }
    }

}

const throttledAPICall = throttle(() => {
    console.log("API Called")
}, 1000)


inputBar.addEventListener("input", (e) => {
    throttledAPICall()
})