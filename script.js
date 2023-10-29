console.log("Welcome to Spotify")
// variables
let songIndex = 0
let audioElement = new Audio('4.mp3.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songitems = Array.from(document.getElementsByClassName('songitem'));
let songs = [
    { songName: "Tu Hai Kaha", filePath: "1.mp3.mp3", coverPath: "covers/1.jpg" },
    { songName: "The Weeknd Starboy", filePath: "3.mp3.mp3", coverPath: "covers/2.jpg" },
    { songName: "Animals", filePath: "songs/3.mp3", coverPath: "covers/3.jpg" },
    { songName: "Gangam Style", filePath: "songs/4.mp3", coverPath: "covers/4.jpg" },
    { songName: "Sunflower", filePath: "songs/5.mp3", coverPath: "covers/5.jpg" },
    { songName: "Habibi-Ricky Rich", filePath: "songs/6.mp3", coverPath: "covers/6.jpg" },
    { songName: "salame-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg" },
]
songitems.forEach((Element, i) => {
    Element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;

})
//audioElement.play();

//handel play pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;

    }
})

//Listen to the event
audioElement.addEventListener('timeupdate', () => {
    //update seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;

})
myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((Element) => {
        Element.classList.remove('fa-circle-pause');
        Element.classList.add('fa-circle-play');

    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach(() => {
    Element.addEventListener('click', (e) => {
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = '1.mp3.mp3';
        audioElement.currentTime = 0;
        audioElement.play();
    })
})