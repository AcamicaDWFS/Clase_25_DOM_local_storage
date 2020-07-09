
let addMenuItem =(function (){
    const li = document.createElement('li');
    li.innerHTML = '<a href="">Item 5</a>';
    let ul = document.getElementById("links");
    ul.appendChild(li);
})();

let assignBold = (function (){
    let paragraph = document.querySelector('p').innerHTML;
    let replaced = paragraph.replace("incididunt", "<b> incididunt </b>");
    document.querySelector('p').innerHTML = replaced;    
    
})();

let setImage = function (imageNumber){
    let image = document.getElementById('img_principal');
    //console.log(image);
    image.setAttribute("src","assets/img/image" + imageNumber + ".jpg");
};

let changeImage = function (){
    let random = 0;
    random = Math.floor(Math.random() * 4) + 1;
    //console.log(random);
    setImage(random);
    //setInterval(`setImage(${random})`,2000);
    
};

setInterval('changeImage()',10000);

function exchangeImage(){
    let card1 = document.getElementById("card1");
    let card2 = document.getElementById("card2");

    let img1 = card1.getAttribute('src');
    let img2 = card2.getAttribute('src');

    card1.setAttribute("src",img2);
    card2.setAttribute("src",img1);

    //console.log(img1);
    //console.log(img2);
}