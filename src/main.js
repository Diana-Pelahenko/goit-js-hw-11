import { fetchImages } from './js/pixabay-api.js';
import {
  renderImages,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = document.querySelector('.input');

function handleSubmit(event) {
  event.preventDefault();

  clearGallery();
  showLoader();

  const inputValue = input.value.trim();
  if (!inputValue) {
    hideLoader();
    return;
  }

  fetchImages(inputValue)
    .then(images => {
      hideLoader();

      if (images.length === 0) {
        iziToast.error({
          maxWidth: '370px',
          position: 'topRight',
          messageColor: 'white',
          backgroundColor: 'red',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });
      } else {
        renderImages(images);
      }
    })
    .catch(error => {
      hideLoader();
      iziToast.error({
        maxWidth: '370px',
        position: 'topRight',
        messageColor: 'white',
        backgroundColor: 'red',
        message: 'Oops! Something went wrong. Please try again later.',
      });
      console.error(error);
    });

  form.reset();
}

form.addEventListener('submit', handleSubmit);
