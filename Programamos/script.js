let name = prompt("Ingresa tu nombre y apellido");
let backGround = prompt("Ingresa un backgroud-color");
let fontColor = prompt("Ingresa un color de fuente");
let fontSize = prompt("Ingresa un tamaño de fuente");

// Caja del HTML para mostrar resultados
let box = document.getElementById("box");
let parrafo = document.createElement("p");
parrafo.innerHTML = "Hola, soy " + name;
parrafo.style.color = fontColor;
parrafo.style.fontSize = fontSize + "px";
box.appendChild(parrafo);
box.style.textAlign = "center";
box.style.backgroundColor = backGround;

console.info(box);