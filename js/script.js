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

let galleryGlassContent = "";
let galleryMiniContent = "";

for (let i = 0; i < items.length; i++) {
    galleryGlassContent += ` <div class="my-img-container">
    <div class="oneImg">
        <img src="${items[i]}" alt="${title[i]}">
    </div>
    <div class="p-3" id="wrapped-text">
        <h2>${title[i]}</h2>
        <p>${text[i]}</p>
    </div>
</div>  

    `
    galleryMiniContent += `
    <div class="my-cover"><img class="img-fluid" src="${items[i]}" alt="${title[i]}"></div>
    `
}

//*RECUPERO L'ELEMENTO DAL DOM

const wrappedGlassElement = document.getElementById("gallery-glass");
console.log(wrappedGlassElement);
wrappedGlassElement.innerHTML += galleryGlassContent;


const wrappedGalleryMiniElement = document.getElementById("wrapped-gallery-mini");
console.log(wrappedGalleryMiniElement);
wrappedGalleryMiniElement.innerHTML += galleryMiniContent;


//* INIALIZZO GLI ELEMENTI CHE VOGLIO VISUALIZZARE IN ACTIVE PER PRIMI
let activeElement = 1;

//*PRENDO LA LISTA DEGLI ITEMS E DA QUESTO O PRESO L'ELEMENTO DELL'INDICE ACTIVEeLEMENT
//*AL QUALE HO AGGIUNTO LA CLASSE ACTIVE

document.getElementsByClassName("my-img-container")[activeElement].classList.add("active");

document.getElementsByClassName("my-cover")[activeElement].classList.add("active");
