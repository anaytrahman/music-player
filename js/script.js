var $playBtn = document.querySelector("#play");
var $prevBtns = document.querySelector("#pre");
var $playImg = document.querySelector("#play-img");
//var $pauseImg = document.querySelector("#pause-img");
var song = new Audio();
var songPlaying = false;
song1 = "./../music/music.mp3";
//window.onload = playSong();


$playBtn.addEventListener('click', function() {
    playSong();
})

// $pauseImg.addEventListener('click', function() {
//     pauseSong();
// })

function playSong() {
    if (!songPlaying) {
        song.src = song1;
        song.play();
        //console.log('playbtn', $playBtn);
        $playImg.src = "images/pause.png";
        songPlaying = true;
    } else {
        song.pause();
        $playImg.src = "./images/play.png";

    }


}


// function playSong() {

//     if (!songPlaying) {
//         $pauseImg.classList.add("show");




//         song.play();
//         songPlaying = true;
//     }

//     //         //console.log('playbtn', $playBtn);
//     // $playImg.src = "images/pause.png";

// }


// function pauseSong() {
//     // song.pause();
//     // $playImg.src = "./images/play.png";
//     songPlaying = false;
// }