import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const imgMarkup = createGalleryItemMarkup(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', imgMarkup);

galleryContainer.addEventListener('click', onGalleryContainerClick);

function createGalleryItemMarkup(img) {
    return img.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
                        <a class="gallery__item"
                        href="${original}">
                        <img class="gallery__image"
                        src="${preview}"
                        alt="${description}" />
                </a>
                    </div>`;
    }).join('')

}

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    if (!evt.target.classList.contains("gallery__image")) {
        return;
    };
    imageModalClick()
}

new SimpleLightbox('.gallery a', {
    navText: ['<', '>'],
    captionsData: 'alt',
    captionPosition: 'bottom',
    captionDelay: 250,
});