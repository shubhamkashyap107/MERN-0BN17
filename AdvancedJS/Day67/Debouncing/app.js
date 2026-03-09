const inputBar = document.getElementById("ip")

function debounce(fn, delay)
{
    let timerId;

    return function()
    {
        clearTimeout(timerId)
        timerId = setTimeout(fn, delay)
    }
}

const delayedApiCall = debounce(() => {
    console.log("API CALLED")
}, 1000)


inputBar.addEventListener("input", () => {
    delayedApiCall()
})

