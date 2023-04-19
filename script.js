
let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar"); 
let gif =  document.getElementById("gif");

let songs =[
    {songName: "salam-e-ishq", filePath:"songs/1.mp3", coverPath:"covers/1.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/2.mp3", coverPath:"covers/2.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/3.mp3", coverPath:"covers/3.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/4.mp3", coverPath:"covers/4.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/5.mp3", coverPath:"covers/5.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/6.mp3", coverPath:"covers/6.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/7.mp3", coverPath:"covers/7.mp4"},
    {songName: "salam-e-ishq", filePath:"songs/8.mp3", coverPath:"covers/8.mp4"}
]


//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.time<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
    
})
//listen to events
audioElement.addEventListener("timeupdate", ()=>{
    console.log("timeupdate")
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})