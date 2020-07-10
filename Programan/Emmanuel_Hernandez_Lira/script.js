// Agrega un nuevo item al menú de navegación desde JavaScript.
const menuList = document.querySelector("nav ul");
const newItem = document.createElement("li");

newItem.innerText = "Item 5";
menuList.append(newItem);

// Agrega una negrita a una sola palabra dentro de tu párrafo.
const p = document.querySelector("p");
let text = p.innerText.split(" ");

const pos = Math.floor(Math.random() * text.length);
text[pos] = `<b>${text[pos]}</b>`;
text = text.join(" ");

p.innerHTML = text;

/* Luego de 10 segundos cambia la imágen. Intercala entre al menos 2 imágenes
 * diferentes.
 */

const img = document.querySelector(".article img");

const imgOne =
  "https://naturecamp.net/wp-content/gallery/home-page-slides/indexslide12.JPG";

const imgTwo = "https://designm.ag/images/arch/nature/54084_1994.jpg";

setInterval(() => {
  img.src === imgOne ? (img.src = imgTwo) : (img.src = imgOne);
}, 10000);

// Invierte el orden de las dos tarjetas.
const cards = document.querySelectorAll(".img-container div");

//prettier-ignore
[cards[0].innerHTML, cards[1].innerHTML] = [cards[1].innerHTML, cards[0].innerHTML];
