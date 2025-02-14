const allButtons = document.querySelectorAll(".drum");

allButtons.forEach(buttonElement => {
  buttonElement.addEventListener("click",function () {
    alert("Funcionou!")  
  })
});