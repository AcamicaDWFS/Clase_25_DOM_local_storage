let _header = document.getElementsByTagName("header");
console.log(_header);
_header[0].style.backgroundColor = "pink";

let _aside = document.getElementsByTagName("aside");
console.log(_aside);
_aside[0].style.backgroundColor = "magenta";


let _art1 = document.getElementsByClassName("art_1");
console.log(_art1);
_art1[0].style.backgroundColor = "skyblue";


let _art3 = document.querySelector(".art_3");
console.log(_art3);
_art3.style.color = "purple";


let _main = document.getElementsByTagName("main");
_main[0].style.backgroundColor = "grey";
console.log(_main);


/*Creación de nodos en DOM*/

//1. Crear el elemento
let elemento = document.createElement("h3");

//2. Crear un nodo de texto
let contenido = document.createTextNode("Este es mi titular");

//3. Añadir el nodo de texto al elemento
elemento.appendChild(contenido);

//4. Agregar atributos al elemento
elemento.setAttribute("align", "center");
elemento.style.backgroundColor = "pink";

//5. Agregar el elemento al documento
document.body.appendChild(elemento);