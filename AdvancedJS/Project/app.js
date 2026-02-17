const expandIcon = document.getElementById("expand-icon")
const songsListContainer = document.getElementById("songs-list-container")
const songsList = document.getElementById("songs-list")
const musicPlayerContainer = document.getElementById("music-player-container")
const playBtn = document.getElementById("play-btn")
const playIcon = document.getElementById("play-icon")
const imageTag = document.getElementById("track-image")
const songName = document.getElementById("track-name")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")
const progressBar = document.getElementById("progress")
const volumeBar = document.getElementById("volume")
let song = new Audio("./media/boyfriend_remix.mp3");
let currSongIdx = 0
song.volume = 0.5


expandIcon.addEventListener("click", () => {
    if(expandIcon.classList.contains("fa-arrow-right"))
    {
        expandIcon.classList.remove("fa-arrow-right")
        expandIcon.classList.add("fa-arrow-left")
        songsListContainer.style.display = "none"
        musicPlayerContainer.style.width = "100vw"
    }
    else
    {
        expandIcon.classList.remove("fa-arrow-left")
        expandIcon.classList.add("fa-arrow-right")
        musicPlayerContainer.style.width = "80vw"
        songsListContainer.style.display = "block"
    }
})

const songsInfo = [
    {
        name : "Sell It",
        img : "https://images.unsplash.com/photo-1761839257870-06874bda71b5?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "sell_it.mp3"
    },
    {
        name : "Zentrix",
        img : "https://images.unsplash.com/photo-1761839258803-21515f43190c?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8",
        trackName : "zentrix.mp3"
    },
    {
        name : "Hehe",
        img : "https://images.unsplash.com/photo-1770954179401-c069cf539be2?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxOHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "hehe.mp3"
    },
    {
        name : "Boyfriend Remix",
        img : "https://plus.unsplash.com/premium_photo-1769370658708-92ce07cd18a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMHx8fGVufDB8fHx8fA%3D%3D",
        trackName : "boyfriend_remix.mp3"
    },

]

let foundSong = songsInfo[0]

for(let item of songsInfo)
{
    const songItem = document.createElement("p")
    songItem.innerText = item.name
    songItem.setAttribute("class", "songItem")
    songsList.append(songItem)
}

const allSongs = document.querySelectorAll(".songItem")


for(let item of allSongs)
{
    item.addEventListener("click", (e) => {
       
        song.pause()
        playIcon.classList.remove("fa-play")
        playIcon.classList.add("fa-pause")
        
    
        let clickedSong = e.target.innerText
        const foundSong = songsInfo.find((item, index) => {
            currSongIdx = index
            return item.name == clickedSong
        })

        imageTag.src = foundSong.img
        songName.innerText = foundSong.name

        song.src = `./media/${foundSong.trackName}`
        // console.dir(song)
        song.play()
    })
}



playBtn.addEventListener("click", () => {

    if(playIcon.classList.contains("fa-play"))
    {
        imageTag.src = foundSong.img
        songName.innerText = foundSong.name
        playIcon.classList.remove("fa-play")
        playIcon.classList.add("fa-pause")
        song.play()
    }
    else
    {
        playIcon.classList.remove("fa-pause")
        playIcon.classList.add("fa-play")
        song.pause()
    }
})






nextBtn.addEventListener("click", () => {
    song.pause()
    currSongIdx++
    if(currSongIdx == songsInfo.length)
    {
        currSongIdx = 0
    }
    if(playIcon.classList.contains("fa-play"))
    {
        playIcon.classList.remove("fa-play")
        playIcon.classList.add("fa-pause")
    }
    foundSong = songsInfo[currSongIdx]
    songName.innerText = foundSong.name
    imageTag.src = foundSong.img
    song.src = `./media/${foundSong.trackName}`
    song.play()
})


prevBtn.addEventListener("click", () => {
    song.pause()
    currSongIdx--
    if(currSongIdx < 0)
    {
        currSongIdx = songsInfo.length - 1
    }
    if(playIcon.classList.contains("fa-play"))
    {
        playIcon.classList.remove("fa-play")
        playIcon.classList.add("fa-pause")
    }
    foundSong = songsInfo[currSongIdx]
    songName.innerText = foundSong.name
    imageTag.src = foundSong.img
    song.src = `./media/${foundSong.trackName}`
    song.play()
})


song.addEventListener("timeupdate", () => {
    progressBar.value = (song.currentTime / song.duration) * 100
})


progressBar.addEventListener("input", (e) => {
    song.currentTime = (progressBar.value * song.duration) / 100
})




volumeBar.addEventListener("input", () => {
    song.volume = volumeBar.value / 100
})