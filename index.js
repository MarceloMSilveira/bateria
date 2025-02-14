const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(buttonElement => {
  buttonElement.addEventListener("click",function () {
    console.log(this.textContent);
    this.style.color="orange";    
  })
});


// var audio = new Audio("./sounds/crash.mp3");
//     audio.play();  