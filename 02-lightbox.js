import { galleryItems } from './gallery-items.js';
// Change code below this line
// пошук галереї на сторінці
const gallery = document.querySelector(".gallery");

const items = [];

galleryItems.forEach((element) => {

  // створюємо посилання
  const galleryLink = document.createElement("a");
  galleryLink.classList.add("gallery__link"); 
  galleryLink.href = element.original; 


  const galleryImage = document.createElement("img");

  
  galleryImage.classList.add("gallery__image");

  
  galleryImage.src = element.preview; // присвоєння малого зображення

 
  galleryImage.setAttribute("title", element.description);

  
  galleryImage.alt = element.description;

  galleryLink.append(galleryImage); 
  items.push(galleryLink); 
});

// додаємо створені елементи до галереї через розпилення
gallery.append(...items);

// додаємо затримки для опису зображення
new SimpleLightbox(".gallery a", {
  captionDelay: 250,
});

console.log(galleryItems);
