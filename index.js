let process = document.querySelector("process")
let song = document.querySelector("song")
let ctrlIcon = document.querySelector("ctrlIcon")

song.onloadedmetadata = function(){
    process.max = song.duration;
    process.value = song.currentTime;
}
function playPause(){
    if(ctrlIcon.classList.contains("fa-pause")){
        song.pause();
        ctrlIcon.classList.remove("fa-pause");
        ctrlIcon.classList.add("fa-play");
    }
    else{
        song.play();
        ctrlIcon.classList.add("fa-pause")
        ctrlIcon.classList.remove("fa-play")
    }
}