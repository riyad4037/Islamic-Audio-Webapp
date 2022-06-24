console.log("Welcome to Islamic Audio");

//initialize the variables
let songIndex = 0;
let MaudioName = document.getElementById('MaudioName');
let audioElement = new Audio('audio/tilwat/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myprogressbar');
let songItem = Array.from(document.getElementsByClassName("songitem"));
// let songItems = Array.from(document.getElementById('songitem'));
let audio = [
    {audioName: "Surat Al-Fatihah", filePath: "audio/tilwat/1.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat Al-Baqarah", filePath: "audio/tilwat/2.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat Ali 'Imran", filePath: "audio/tilwat/3.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat An-Nisa", filePath: "audio/tilwat/4.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat Al-Ma'idah", filePath: "audio/tilwat/5.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat Al-An'am", filePath: "audio/tilwat/6.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat Al-A'raf", filePath: "audio/tilwat/7.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat Al-Anfal", filePath: "audio/tilwat/8.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Surat At-Tawbah", filePath: "audio/tilwat/9.mp3", coverPath:"covers/tilwat/1.jpg"},
    {audioName: "Gajol-1", filePath: "audio/gajol/1.mp3", coverPath:"covers/gajol/1.jpg"},
    {audioName: "Gajol-2", filePath: "audio/gajol/2.mp3", coverPath:"covers/gajol/1.jpg"},
]

songItem.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = audio[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = audio[i].audioName;
})

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})

// Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
    //Update Seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('SongItemPlay')).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");
    })
}

Array.from(document.getElementsByClassName('SongItemPlay')).forEach(element => {
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        index = parseInt(e.target.id);
        songIndex = index;
        console.log(index);
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        audioElement.src = 'audio/tilwat/'+index+'.mp3';
        MaudioName.innerText = audio[songIndex-1].audioName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");

    })
});

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=10){
        songIndex = 1;
    }else{
        songIndex+=1;
    }
    audioElement.src = 'audio/tilwat/'+songIndex+'.mp3';
    MaudioName.innerText = audio[songIndex-1].audioName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 10;
    }else{
        songIndex-=1;
    }
    audioElement.src = 'audio/tilwat/'+songIndex+'.mp3';
    MaudioName.innerText = audio[songIndex-1].audioName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove("fa-circle-play");
    masterPlay.classList.add("fa-circle-pause");

})