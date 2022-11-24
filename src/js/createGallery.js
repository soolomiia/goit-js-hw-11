import fetchPhoto from './fetchPhoto';

const form = document.querySelector('form');
const input =  document.querySelector('input');
const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

export default function createGallery(query) {
  fetchPhoto(query).then(arrey => {
    if (0) {
      createNewGallery(arrey.hits);
    } else if (0) {
      createNextGallery(arrey.hits);
    }
  });
}

form.addEventListener('submit', handleSubmit);
loadMore.addEventListener('click', createGallery(input.value));

function handleSubmit(event) {
  event.preventDefault();
  createGallery(input.value);
}

function createNewGallery(photos) {
  gallery.innerHTML = '';

  for (const photo of photos) {
    gallery.innerHTML += `<div class="photo-card">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${photo.downloads}</b>
    </p>
  </div>
</div>`;
  }
  loadMore.classList.remove('visually-hidden');
}

function createNextGallery(photos) {
  for (const photo of photos) {
    gallery.innerHTML += `<div class="photo-card">
  <img src="${photo.webformatURL}" alt="${photo.tags}" loading="lazy" />
  <div class="info">
    <p class="info-item">
      <b>Likes</b>
      <b>${photo.likes}</b>
    </p>
    <p class="info-item">
      <b>Views</b>
      <b>${photo.views}</b>
    </p>
    <p class="info-item">
      <b>Comments</b>
      <b>${photo.comments}</b>
    </p>
    <p class="info-item">
      <b>Downloads</b>
      <b>${photo.downloads}</b>
    </p>
  </div>
</div>`;
  }
}
