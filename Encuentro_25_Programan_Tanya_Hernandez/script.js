function primeraFuncion() {
    var x = document.createElement("LI");
    var t = document.createTextNode("Coffee");
    
    x.appendChild(t);
    document.getElementById("menu").appendChild(x);
  }

function segundaFuncion(){
    var bold = document.getElementById("bold");
    bold.style.fontWeight= "bold";
    bold.style.color = "red";
}

var imagenes=new Array(

    ['paisaje.jpg'],
    ['paisaje2.jpg']
);

var contador=0;

function rotarImagenes()

{
    contador++
    document.getElementById("imagen").src=imagenes[contador%imagenes.length][0];

}

onload=function()

{
    rotarImagenes();
    setInterval(rotarImagenes,10000);

}

function TerceraFuncion(){
    document.getElementById("img3").src="paisaje2.jpg";
    document.getElementById("img4").src="paisaje.jpg";
}
   