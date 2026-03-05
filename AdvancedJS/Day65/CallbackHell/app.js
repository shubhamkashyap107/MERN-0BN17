// function clickPicture(cb)
// {
//     setTimeout(() => {
//         console.log("Picture Clicked")
//         cb()
//     }, 4000)
// }

// function selectPicture(cb)
// {
//     setTimeout(() => {
//         console.log("Picture Selected")
//         cb()
//     }, 3000)
// }

// function applyFilters(cb)
// {
//     setTimeout(() => {
//         console.log("Filter Applied")
//         cb()
//     }, 2000)
// }

// function chooseCaption(cb)
// {
//     setTimeout(() => {
//         console.log("Caption Selected")
//         cb()
//     }, 1000)
// }

// function uploadPicture()
// {
//     setTimeout(() => {
//         console.log("Picture Uploaded")
//     }, 1000)
// }


// clickPicture(selectPicture(applyFilters(chooseCaption(uploadPicture()))))

// clickPicture(() => {
//     selectPicture(() => {
//         applyFilters(() => {
//             chooseCaption(() => {
//                 uploadPicture()
//             })
//         })
//     })
// })

// clickPicture()
// selectPicture()
// applyFilters()
// chooseCaption()
// uploadPicture()


function clickPicture()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
          console.log("Picture Clicked")
          resolve()
        }, 4000)
    })
}

function selectPicture()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Picture Selected")
            resolve()
        }, 3000)
    })
}

function applyFilters()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Filter Applied")
            resolve()
        }, 2000)
    })
}

function chooseCaption()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Caption Selected")
            resolve()
        }, 1000)
    })
}

function uploadPicture()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Picture Uploaded")
            resolve()
        }, 1000)

    })
}

clickPicture()
.then(selectPicture)
.then(applyFilters)
.then(chooseCaption)
.then(uploadPicture)