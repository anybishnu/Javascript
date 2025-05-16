//bulb img =  https://www.w3schools.com/js/pic_bulboff.gif
// sound = https://www.fesliyanstudios.com/play-mp3/387

let isOn = false;

function manuallyToggle(){
    const bulbImg = document.querySelector(".bulbImg");
    const inputBox = document.querySelector(".inputBox");
    const audio = document.querySelector("audio");

    if(inputBox.checked){
        bulbImg.src = "https://www.w3schools.com/js/pic_bulbon.gif"
    }else {
        bulbImg.src = "https://www.w3schools.com/js/pic_bulboff.gif"
    }
    isOn = inputBox.checked
    audio.currentTime = 0;
    audio.play();
}