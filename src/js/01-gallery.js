import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryContainer = document.querySelector(".gallery")

const getMarkup = galleryItems.map(({preview, original, description}, index, array) => {
    // Тело коллбек-функции
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
      />
    </a>
  </div>`;
  })
  .join("");

console.log(getMarkup);

galleryContainer.insertAdjacentHTML("afterbegin", getMarkup);

galleryContainer.addEventListener("click", openModal);

function openModal(event) {
	event.preventDefault();
	if (event.target.nodeName !== "IMG") return;

	const instance = basicLightbox.create(
		`<img src="${event.target.dataset.source}">`
	);
	instance.show();
}

// Создание и рендер разметки по массиву данных galleryItems 
// и предоставленному шаблону элемента галереи.


// {/* <div class="gallery__item">
//   <a class="gallery__link" href="large-image.jpg">
//     <img
//       class="gallery__image"
//       src="small-image.jpg"
//       data-source="large-image.jpg"
//       alt="Image description"
//     />
//   </a>
// </div> */}

// Реализация делегирования на div.gallery и получение url 
// большого изображения. 


// Подключение скрипта и стилей библиотеки модального окна 
// basicLightbox. Используй CDN сервис jsdelivr и добавь в
//  проект ссылки на минифицированные (.min) файлы библиотеки.

// const instance = basicLightbox.create(`
//     <div class="modal">
//         <p>
//             Your first lightbox with just a few lines of code.
//             Yes, it's really that simple.
//         </p>
//     </div>
// `)

// instance.show()

// Открытие модального окна по клику на элементе галереи. 
// Для этого ознакомься с документацией и примерами.

// Замена значения атрибута src элемента <img> в модальном 
// окне перед открытием. Используй готовую разметку 
// модального окна с изображением из примеров библиотеки 
// basicLightbox.