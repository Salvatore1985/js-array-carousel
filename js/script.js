//*RECUPERO L'ELEMNTO DAL DOM
const galleryElement = document.getElementById("gallery");

/* const provaElement = document.getElementById("prova"); */

const buttonMyAngleUp = document.querySelector("div.my-angle-up");
const buttonMyAngleDown = document.querySelector("div.my-angle-down");



//**GREO UN ARRAY DI IMMAGINI
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let listImages = "";


for (let i = 0; i < items.length; i++) {
    listImages += `
     <img class="carousel-element" src="${items[i]}" alt="">`
};
console.log(listImages);

/*
const provaElement = document.querySelector("div#gallery");
const carouselElements = document.getElementsByClassName('carousel-element');
const bookmarkElements = document.getElementsByClassName('circle');

carouselElements[0].classList.add('active');
bookmarkElements[0].classList.add('active');
console.log(carouselElements);

 */


