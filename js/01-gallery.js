import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector(".gallery");

const items = [];


galleryItems.forEach((element) => {


    const galleryItem = document.createElement("div");
    galleryItem.classList.add("gallery__item"); 
  
    // створюємо посилання 
    const galleryLink = document.createElement("a");
    galleryLink.classList.add("gallery__link"); 
  
  
    galleryLink.href = element.original; 
  
    // створюємо зображення
    const galleryImg = document.createElement("img");
    galleryImg.classList.add("gallery__image"); 
  
  
    galleryImg.src = element.preview; 
  
   
    galleryImg.setAttribute("data-source", element.original);
  
    
    galleryImg.alt = element.description; 
  
    galleryItem.append(galleryLink); 
    galleryLink.append(galleryImg); 
    items.push(galleryItem); 
  });
  
  // додаємо створені елементи до галереї через розпилення
  gallery.append(...items);
  
 
  document.addEventListener("click", (e) => {
    
    // відміняємо поведінки за замовчуванням,
    // користувач не буде перенаправлений на нову сторінку.
    e.preventDefault();
  
    // перевіряємо чи відбувся клік на зображенні
    if (e.target.nodeName !== "IMG") {
      return;
    }
  
    // зберегаємо об'єкт події з атрибутом в змінну
    const imgSelected = e.target.getAttribute("data-source");
  
  
    const template = basicLightbox.create(
      `<img src="${imgSelected}" width="800" height="600">`,
  
      // обʼєкт налаштувань бібліотеки
      {
        // показати
        onShow: () => {
          document.addEventListener("keydown", closeModal); 
        },
        // закрити
        onClose: () => {
          document.removeEventListener("keydown", closeModal); 
        },
      }
    );
  
    // показ шаблону зображення
    template.show();
  
    // перевіряємо натиск клавіші Escape
    function closeModal(e) {
      if (e.key === "Escape") {
        template.close();
      }
    }
  });

console.log(galleryItems);
