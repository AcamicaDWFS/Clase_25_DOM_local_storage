//Agregar elemento a la lista
document.getElementById('lista').innerHTML += '<li class="item"><a href="#"> Item 5</a></li>';
//Agregar negrita a una palabra del parrafo
const parrafo = document.querySelector('p').innerHTML;
const negritas = parrafo.replace('Tactical', '<b>Tactical</b>');
document.querySelector('p').innerHTML = negritas;
//Intercambiar imagen cada 10 segundos
let imagenesArticuloArray = ['https://wallpapercave.com/wp/rC9PiGj.jpg',
    'https://i.ytimg.com/vi/fYF3QIjk-A4/maxresdefault.jpg',
    'https://i.ytimg.com/vi/CzDRSmnedGk/maxresdefault.jpg'];
let i = 0;
onload = function () {
    setInterval(() => {
        document.getElementById('article-img').src = imagenesArticuloArray[i % imagenesArticuloArray.length];
        i++;
    }, 2000);
}
//Intercambiar imagenes
document.getElementById('perfil-img1').src = 'https://images.alphacoders.com/737/737699.jpg';
document.getElementById('perfil-img2').src = 'https://wallpapercave.com/wp/0XvoDKd.jpg';

let perfilOne = document.getElementById('perfil-img1').src;
let perfilTwo = document.getElementById('perfil-img2').src;

let aux = perfilOne;
perfilOne = perfilTwo;

document.getElementById('perfil-img1').src = perfilTwo;
document.getElementById('perfil-img2').src = aux;




