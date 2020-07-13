function agregar_item() {
    let menu = document.getElementById("menu_1");
    let new_item = document.createElement("li");
    new_item.innerHTML ="ITEM 5";
    menu.appendChild(new_item);
}

function negrita() {
    let negrita = document.getElementById("title_heading");
    negrita.style.fontWeight = "strong";
    negrita.style.color = "orange";
}

function mover_tarjetas() {
    let perrito1 = document.getElementById("perrito_1");
    let perrito2 = document.getElementById("perrito_2");
    perrito1.style.transform = "translateX(650px)";
    perrito2.style.transform = "translateX(-650px)";
}

function cambiar_imagen() {
    let cachorro = document.getElementById("cachorro");
    let perro_adulto = document.getElementById("perro_adulto");
}


let cachorro = document.getElementById("cachorro");
let perrito = "perrito.jpg";
let perrito1 = "perrito1.jpg";
let perrito2 = "perrito2.jpg";
let imagenes = new Array(perrito, perrito1, perrito2);
let i = 0;


function Index(){
    if (i < imagenes.length) {
        cachorro.src = imagenes[i];
        i++;
    } else {
        i=0;
    }
}


