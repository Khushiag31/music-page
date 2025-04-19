let songname=document.querySelector("#song-name");
let singername=document.querySelector("#singer-name");
let songImg=document.querySelector(".songimg");
let playPauseImg=document.querySelector("#play");
let volumeRange=document.querySelector("#range");
let volumeMute=document.querySelector("#icon3");
let songRange=document.querySelector("#range2");
let index=0;
let playingSong=false;
let previousVolume=1;
let track=document.createElement("audio");
let songs=[
    {
        name:"A Single Step",
        path:"songs/A Single Step - Density & Time.mp3",
        Image:"pic1.jpg",
        singer:" Linkin Park"
    },
    {
        name:"Curse of old",
        path:"songs/Curse Of Old - Density & Time.mp3",
        Image:"pic2.jpeg",
        singer:"Density & Time"
    },
    {
        name:"End of Valor",
        path:"songs/End Of Valor - Density & Time.mp3",
        Image:"pic3.jpg",
        singer:" Keith Urban"
    },
    {
        name:"Heartbeat of The Wind",
        path:"songs/Heartbeat Of The Wind - Asher Fulero.mp3",
        Image:"pic4.jpeg",
        singer:" Asher fullor"
    },
    {
        name:"Risen",
        path:"songs/Risen - Density & Time.mp3",
        Image:"pic5.jpg",
        singer:" Shawna Edwards"
    }
]

function loadtrack (index){
 track.src=songs[index].path;
 songname.innerHTML=songs[index].name;
 singername.innerHTML=songs[index].singer;
 songImg.style=`background-image:url("${songs[index].Image}");`

 volume()
 duration()
 track.load()
}

loadtrack(index);

function playPause(){
    if(playingSong==false){
        playSong()
    }else{
        pauseSong()
    }
}

function playSong(){
    track.play();
    playingSong=true;
    playPauseImg.src="pause.svg";
}
function pauseSong(){
    track.pause();
    playingSong=false;
    playPauseImg.src="play3.svg";
}
function nextSong(){
    if(index<songs.length-1){
    index++;
    loadtrack(index);
    playSong();
    }else{
        index=0;
        loadtrack(index);
        playSong();
    }
}

function previousSong(){
    if(index>0){
    index--;
    loadtrack(index);
    playSong();
    }else{
        index=songs.length-1;
        loadtrack(index);
        playSong();
    }
}
function volume(){
    track.volume=volumeRange.value/100
     if(volumeRange.value==0){
        volumeMute.src="back.svg";
   }else{
    volumeMute.src="mus3.svg";
   }
  
}
function volMute(){
    if(track.volume!==0){
        Mute()  
    }else{
       volStart()
      
    }
}
function Mute(){
    track.volume=0;
    volumeRange.value=0;
    volumeMute.src="mute.svg";
}
function volStart(){
   track.volume=previousVolume;
   volumeRange.value=previousVolume*100;
    volumeMute.src="mus3.svg";
}
function duration(){
    track.currentTime=songRange.value;
}