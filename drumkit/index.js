var numberOfDrumButtons=document.querySelectorAll(".drum").length;
for (var i = 0; i<numberOfDrumButtons; i++) {

document.querySelectorAll("button")[i].addEventListener("click",function (){
    var buttonInnerHTML=this.innerHTML;

    makesound(buttonInnerHTML);

})

}


document.addEventListener("keypress", function(event){
makesound(event.key);
});
function makesound(key){
  switch (key) {
    case "w":
      this.style.color="white";
var audio=new Audio("sounds/tom-1.mp3");
audio.play();
break;
   

case "w":
      this.style.color="white";
var audio=new Audio("sounds/tom-1.mp3");
audio.play();
break;


case "a":
      this.style.color="white";
var audio=new Audio("sounds/tom-2.mp3");
audio.play();
break;

case "s":
      this.style.color="white";
var audio=new Audio("sounds/tom-3.mp3");
audio.play();
break;

case "d":
      this.style.color="white";
var audio=new Audio("sounds/tom-4.mp3");
audio.play();
break;

case "j":
      this.style.color="white";
var audio=new Audio("sounds/crash.mp3");
audio.play();
break;

case "k":
      this.style.color="white";
var audio=new Audio("sounds/snare.mp3");
audio.play();
break;

case "l":
      this.style.color="white";
var audio=new Audio("sounds/kick-bass.mp3");
audio.play();
break;

}

}


  