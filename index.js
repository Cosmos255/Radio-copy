
let url = "https://radiozu.ro/trackid/radiozu-live.txt";
let livetext  = document.getElementById("livetxt");
let xhttp = new XMLHttpRequest();

 xhttp.onload = function (){
     livetext.innerHTML = xhttp.responseText;
 };
xhttp.open("GET", url);
xhttp.send();















const radio = document.getElementById("radiolink");
const playbtn = document.getElementById("playbtn");
const number = document.getElementById("number");
const mutebtn = document.getElementById("mutebtn");
let volumei = document.getElementById("audioslide");
let volume ;
let playing = false;
let mute = false;
let numberr;
const max = 10;
const min = 0;





window.alert("Salut :) ");


function Salut() {
    number.textContent = numberr = Math.floor(Math.random() * max) + min;
    console.log("numberr");
    
    
}


function sopen(){
    document.getElementById("sidebar").style.display = "block";
    document.getElementById("bars").style.display = "none";

}

function sclose(){
    document.getElementById("sidebar").style.display = "none";
    document.getElementById("bars").style.display = "inline";

}

playbtn.onclick = function(){
    playing = !playing;

   if(playing == true){
    radio.play();
    console.log(playing);
    playbtn.className = "fa-solid fa-pause"
   }
   else if(playing == false){
    radio.pause();
    playbtn.className = "fa-solid fa-play"
    playing = false;
    
   }
   else{
    console.log('error');
   }
   }


mutebtn.onclick = function(){
    mute = !mute
   }


setInterval(volumef, 100);

function volumef(){
    volume = volumei.value / 10

    console.log(volume);
    

    if(volume > 0.4 && !mute ){
        mutebtn.className = "fa-solid fa-volume-high"
        radio.volume = volume;
    
    }
    else if(volume > 0 && !mute){
        mutebtn.className = "fa-solid fa-volume-low"
        radio.volume = volume;
    }


    else if(volume == 0 || mute == true){
        mutebtn.className = "fa-solid fa-volume-off"
        radio.volume = 0;
    }
    
}


