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
galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
