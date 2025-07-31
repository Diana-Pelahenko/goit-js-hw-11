import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

let lightbox = null;

export function clearGallery() {
  const galleryList = document.querySelector('.gallery');
  galleryList.innerHTML = '';
}

export function showLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.remove('visually-hidden');
}

export function hideLoader() {
  const loader = document.querySelector('.loader');
  loader.classList.add('visually-hidden');
}

export function renderImages(images) {
  const galleryList = document.querySelector('.gallery');
  const markup = images
    .map(
      ({ webformatURL, largeImageURL, tags }) => `
      <li class="gallery-item">
        <a href="${largeImageURL}">
          <img src="${webformatURL}" alt="${tags}" loading="lazy" />
        </a>
      </li>
    `
    )
    .join('');
  galleryList.insertAdjacentHTML('beforeend', markup);

  if (lightbox) {
    lightbox.refresh();
  } else {
    lightbox = new SimpleLightbox('.gallery a', {
      captionsData: 'alt',
      captionDelay: 250,
    });
  }
}
