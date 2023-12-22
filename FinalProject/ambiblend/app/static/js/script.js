let ambient = document.getElementById("ambient")
let background = document.getElementById("background")
let backgroundPlay = document.getElementById("backgroundPlay")
let allBackgroundTracks = [
    {
        category: 'deep_focus', id: '1',
        songs: ['../media/background_track/deep_focus_track1.mp3', '../media/background_track/deep_focus_track2.mp3', '../media/background_track/deep_focus_track3.mp3']
    },
    {
        category: 'focus', id: '2',
        songs: ['../media/background_track/focus_track1.mp3', '../media/background_track/focus_track2.mp3', '../media/background_track/focus_track3.mp3']
    },
    {
        category: 'moderate', id: '3',
        songs: ['../media/background_track/moderate_track1.mp3', '../media/background_track/moderate_track2.mp3', '../media/background_track/moderate_track3.mp3']
    },
    {
        category: 'relax', id: '4',
        songs: ['../media/background_track/relax_track1.mp3', '../media/background_track/relax_track2.mp3', '../media/background_track/relax_track3.mp3']
    },
    {
        category: 'deep_relax', id: '5',
        songs: ['../media/background_track/deep_relax_track1.mp3', '../media/background_track/deep_relax_track2.mp3', '../media/background_track/deep_relax_track3.mp3']
    }
]

let currentSongIndex = 0
let currentCategory = allBackgroundTracks[2].songs


function Default() {
    ambient.volume = 0.5
    background.volume = 0.5
    background.src= currentCategory[currentSongIndex]
}
Default()

function playPause(play, audio) {
    let track = document.getElementById(audio)
    if (track.paused) {
        play.src = "../static/assets/png/pause.png"
        track.play()
    } else {
        play.src = "../static/assets/png/play.png"
        track.pause()
    }
}

function audioVol(range, audio) {
    let track = document.getElementById(audio)
    track.volume = (range.value / 100) + 0.1
}

function focusMode(range, audio) {
    let track = document.getElementById(audio)
    currentCategory=allBackgroundTracks[range.value].songs
    background.src= currentCategory[currentSongIndex]
    if (backgroundPlay.src = "../static/assets/png/play.png")
    {
        background.play()
        backgroundPlay.src = "../static/assets/png/pause.png"
    }
    
}

function changeTrack(audio){
    let track = document.getElementById(audio)
    background.pause()
    if (currentSongIndex >= (currentCategory.length - 1)){
        currentSongIndex = 0
    } 
    else {
        currentSongIndex++
    }

    background.src= currentCategory[currentSongIndex]
    background.play()
    backgroundPlay.src = "../static/assets/png/pause.png"

}