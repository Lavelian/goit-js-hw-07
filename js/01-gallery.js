import { galleryItems } from "./gallery-items.js";

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
  const instance = basicLightbox.create(
    ` <img src="${event.target.dataset.source}" width="800" height="600" alt ="${event.target.alt}" >`,
    {
      onShow: () => {
        document.addEventListener("keydown", tabEsp);
      },
      onClose: () => {
        document.removeEventListener("keydown", tabEsp);
      },
    }
  );

  function tabEsp(event) {
    if (event.code !== "Escape") {
      return;
    }
    instance.close();
  }

  instance.show();
}

galleryEl.addEventListener("click", OnCliclImage);
