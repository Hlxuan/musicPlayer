const musicContainer = document.getElementById("music-container")
const playBtn = document.getElementById("play")
const prevBtn = document.getElementById("prev")
const nextBtn = document.getElementById("next")

const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")
const cover = document.getElementById("cover")

const songs = ["暮色回响", "嘉宾", "追光者"]

const songIndex = 0

loadSong(songs[songIndex])

function loadSong(song) {}
