const toggle = document.querySelector("#toggle");
const menu = document.querySelector(".menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("visible");

  if (toggle.checked) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "visible";
  }
});

console.log("Hello, World!");
