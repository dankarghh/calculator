const message = document.querySelector(".calculator_screen");
const btn7 = document.getElementById("btn7");

btn7.addEventListener("click", (e) => {
  message.textContent = 7;
});

console.log(btn7);
