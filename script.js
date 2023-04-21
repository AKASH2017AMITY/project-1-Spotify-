
let audioElement = new Audio("songs/1.mp3");
let songIndex = 0;
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar"); 
let gif =  document.getElementById("gif");
let songItem = Array.from(document.getElementsByClassName("songItem"));
let masterSongName = document.getElementById("masterSongName");
let songs =[
    {songName: "Warriyo - Mortals(feat. Laura Brehm)", filePath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "ceilo -Huma-Huma", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "DEAF KEY - INVINCIBLE ", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "DIFFERENT Heaven & EHide", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName: "Jnaji-Heroes-Tonight-feat-johning", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName: "Rabba salam-e-ishq", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName: "Sakihyan salam-e-ishq", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName: "LoveSex salam-e-ishq", filePath:"songs/8.mp3", coverPath:"covers/8.jpg"}
]


songItem.forEach((Element,i)=>{
    Element.getElementsByClassName("coverImage")[0].src = songs[i].coverPath;
    Element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


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
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
    
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100 ;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=>{
        Element.classList.remove("fa-pause-circle");
        Element.classList.add("fa-play-circle");
    })   
}
Array.from(document.getElementsByClassName("songItemPlay")).forEach((Element)=>{
    Element.addEventListener("click", (e)=>{
        //console.log(e.target);
        makeAllPlays();
        
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})


document.getElementById("next").addEventListener("click", ()=>{
    if(songIndex>=7){
        songIndex = 0;
    }
    else {
        songIndex =songIndex + 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


document.getElementById("previous").addEventListener("click", ()=>{
    if(songIndex<=0){
        songIndex = 7;
    }
    else {
        songIndex =songIndex - 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})