const allButtons = document.querySelectorAll(".drum");

function playAudio(selectedChar) {
  switch (selectedChar) {
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

function animateBtn(selectedChar) {
  const btnClass = "." + selectedChar;
  const btnElement = document.querySelector(btnClass);
  console.log(btnElement.textContent);
  console.log(btnElement.classList);
  btnElement.classList.add("pressed");
  console.log(btnElement.classList);
  setTimeout(() => {
    btnElement.classList.remove("pressed");
  }, 100);
}

allButtons.forEach((buttonElement) => {
  buttonElement.addEventListener("click", (evt) => {
    const clickedChar = evt.target.textContent;
    console.log(clickedChar);
    playAudio(clickedChar);
    animateBtn(clickedChar);
  });
  buttonElement.addEventListener("touchstart", function (event) {
    event.preventDefault(); // Bloqueia o comportamento padrão do toque
  });
});

document.addEventListener("keydown", (evt) => {
  const pressedKey = evt.key;
  console.log(pressedKey);
  playAudio(pressedKey);
  animateBtn(pressedKey);
});
