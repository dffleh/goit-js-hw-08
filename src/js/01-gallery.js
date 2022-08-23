// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";



console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const itemsMarkup = galleryItems.map(({ preview, original, description }) => {
    return `
  <div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>
`
}).join('');


galleryList.insertAdjacentHTML('afterbegin', itemsMarkup);
galleryList.addEventListener('click', onGalleryListClick);

function onGalleryListClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) return;
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionPosition: 'bottom',
        captionDelay: 250,
    });

};