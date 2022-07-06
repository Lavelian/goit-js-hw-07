import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createMarkupGallery(galleryItems);

function createMarkupGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__card"> <a class="gallery__item" href="${original}"> <img class="gallery__image" src="${preview}"
      alt="${description}" /></a></li>`;
    })
    .join(" ");
}

console.log(galleryMarkup);

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function createModal(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }
  const lightbox = new SimpleLightbox(".gallery a", {
    captionDelay: 250,
    /* options */
  });
}

galleryEl.addEventListener("click", createModal);
