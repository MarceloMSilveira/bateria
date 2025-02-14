const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(buttonElement => {
  buttonElement.addEventListener("click",function () {
    var audio = new Audio("./sounds/crash.mp3");
    audio.play();  
  })
});