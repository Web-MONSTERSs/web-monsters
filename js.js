function myFunction() {
    let audio=document.getElementById("a")
    audio.src= 'resorces/sounds/flashbang_explode2.wav';
    audio.play();
    window.location.href = 'index0.html';
}
function myFunction2() {
    let audio=document.getElementById("a")
    audio.src= 'resorces/sounds/flashbang_explode2.wav';
    audio.play();
    window.location.href = 'Cavid.html';

}
function myFunction3() {
    let audio=document.getElementById("a")
    audio.src= 'resorces/sounds/flashbang_explode2.wav';
    audio.play();
    window.location.href = 'nuraya.html';

}
function myFunction4() {
    let audio=document.getElementById("a")
    audio.src= 'resorces/sounds/flashbang_explode2.wav';
    audio.play();
    window.location.href = 'Ilkin.html';

}
function mySound() {
    let audio=document.getElementById("a")
    audio.src= 'resorces/sounds/auto_semiauto_switch.wav';
    audio.play();
}

function myFunctionBCG(){
    document.getElementById(1).style.display = "inline-block";
}

function myFunctionX(){
    document.getElementById("BCG1").style.display= "block";
    document.getElementById("BCG2").style.display= "none";
    document.getElementById("BCG3").style.display= "none";


}
function myFunctionY(){
    document.getElementById("BCG2").style.display= "block";
    document.getElementById("BCG1").style.display= "none";
    document.getElementById("BCG3").style.display= "none";

}
function myFunctionZ(){
    document.getElementById("BCG3").style.display= "block";
    document.getElementById("BCG1").style.display= "none";
    document.getElementById("BCG2").style.display= "none";

}
function myGallery1(){
    document.getElementById("pic1").style.display= "block";
    document.getElementById("pic2").style.display= "none";
    document.getElementById("pic3").style.display= "none";
    document.getElementById("dot1").style.background= "darkgrey";
    document.getElementById("dot2").style.background= "lightgrey";
    document.getElementById("dot3").style.background= "lightgrey";
}
function myGallery2(){
    document.getElementById("pic2").style.display= "block";
    document.getElementById("pic1").style.display= "none";
    document.getElementById("pic3").style.display= "none";
    document.getElementById("dot2").style.background= "darkgrey";
    document.getElementById("dot1").style.background= "lightgrey";
    document.getElementById("dot3").style.background= "lightgrey";
}
function myGallery3(){
    document.getElementById("pic3").style.display= "block";
    document.getElementById("pic2").style.display= "none";
    document.getElementById("pic1").style.display= "none";
    document.getElementById("dot3").style.background= "darkgrey";
    document.getElementById("dot2").style.background= "lightgrey";
    document.getElementById("dot1").style.background= "lightgrey";
}
