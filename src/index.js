import createNewGallery from './js/createNewGallery';
import createNextGallery from './js/createNextGallery';

const form = document.querySelector('form');
const input = document.querySelector('input');
const loadMore = document.querySelector('.load-more');

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', newHandleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  createNewGallery(input.value);
}

function newHandleSubmit(event) {
  event.preventDefault();
  createNextGallery(input.value);
}
