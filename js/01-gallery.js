import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryEl = document.querySelector(".gallery");
const galleryMarkup = createMarkupGallery(galleryItems);

function createMarkupGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join(" ");
}

galleryEl.insertAdjacentHTML("beforeend", galleryMarkup);

function OnCliclImage(event) {
  event.preventDefault();
  if (!event.target.classList.contains("gallery__image")) {
    return;
  }

  const instance = basicLightbox.create(`
     <img src="${event.target.dataset.source}" width="800" height="600" alt ="${event.target.alt}" >`);

  instance.show();

  document.addEventListener(
    "keydown",
    (event) => {
      if (event.code !== "Escape") {
        return;
      }
      instance.close();
    },
    { once: true }
  );
}

galleryEl.addEventListener("click", OnCliclImage);
