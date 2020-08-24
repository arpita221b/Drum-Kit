
var totButtons=document.querySelectorAll("button").length;

for (var i=0 ; i<totButtons ;i++ ) {
  document.querySelectorAll("button")[i].addEventListener("click",function() {

var button= this.innerHTML;

  sound(button);
  buttonAnimation(button);
  });

}

document.addEventListener("keydown",function(event){
  sound(event.key);
  buttonAnimation(event.key);
});

function sound(key){
  switch (key) {
    case "w":
    var tom1 = new Audio("sounds/tom-1.mp3");
    tom1.play();
    break;
    case "a":
    var tom2 = new Audio("sounds/tom-2.mp3");
    tom2.play();
    break;
    case "s":
    var tom3 = new Audio("sounds/tom-3.mp3");
    tom3.play();
    break;
    case "d":
    var tom4 = new Audio("sounds/tom-4.mp3");
    tom4.play();
    break;
    case "j":
    var snare = new Audio("sounds/snare.mp3");
    snare.play();
    break;
    case "k":
    var kick = new Audio("sounds/kick-bass.mp3");
    kick.play();
    break;
    case "l":
    var crash = new Audio("sounds/crash.mp3");
    crash.play();
    break;
    default: console.log(button);

  }
}
function buttonAnimation(currentKey){
var activeButton = document.querySelector("."+currentKey);
activeButton.classList.add("but");
setTimeout(function(){ activeButton.classList.remove("but"); },100);
}
