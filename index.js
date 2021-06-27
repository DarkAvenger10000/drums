var i=0;
for (i=0;i<7;i++){
  document.querySelectorAll("button")[i].addEventListener("click", handleClick);
}

function handleClick(){
  var buttonInnerHtml = this.innerHTML;
  drum(buttonInnerHtml);
  buttonAnimation(buttonInnerHtml);

  }


document.addEventListener("keypress", function(event) {
  drum(event.key);
  buttonAnimation(event.key);


});

function drum(key){
  switch (key) {
    case "k":
      var audio = new Audio('sounds/crash.mp3');
      audio.play();
      break;
    case "i":
      var audio = new Audio('sounds/kick-bass.mp3');
      audio.play();
      break;
    case "r":
      var audio = new Audio('sounds/snare.mp3');
      audio.play();
      break;
    case "a":
      var audio = new Audio('sounds/tom-1.mp3');
      audio.play();
      break;
    case "n":
      var audio = new Audio('sounds/tom-2.mp3');
      audio.play();
      break;
    case "g":
      var audio = new Audio('sounds/tom-3.mp3');
      audio.play();
      break;
    case "o":
      var audio = new Audio('sounds/tom-4.mp3');
      audio.play();
      break;
    default:
      console.log(key);
    }
}

function buttonAnimation(currentKey){
  var animation = document.querySelector("."+ currentKey);
  animation.classList.add("pressed");
  setTimeout(function(){
    animation.classList.remove("pressed");
  },0.200);
}
