const allButtons = document.querySelectorAll(".drum");

function playAudio(evt) {
  //const characterPressed = this.textContent;
  const characterPressed = evt.target.textContent;
  switch (characterPressed) {
    case "w":
      var audio = new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;

    case "a":
      var audio = new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;

    case "s":
      var audio = new Audio("./sounds/tom-3.mp3");
      audio.play();
      break;

    case "d":
      var audio = new Audio("./sounds/tom-4.mp3");
      audio.play();
      break;

    case "j":
      var audio = new Audio("./sounds/snare.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("./sounds/crash.mp3");
      audio.play();
      break;

    case "l":
      var audio = new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;

    default:
      console.log(this.textContent);
      break;
  }
}

allButtons.forEach((buttonElement) => {
  buttonElement.addEventListener("click", playAudio);
});
