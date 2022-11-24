import fetchPhoto from './fetchPhoto';
import Notiflix from 'notiflix';

const gallery = document.querySelector('.gallery');
const loadMore = document.querySelector('.load-more');

export default function createNewGallery(query) {
  fetchPhoto(query).then(arrey => {
    if (arrey.data.hits.length === 0) {
      return Notiflix.Notify.failure(
        'Sorry, there are no images matching your search query. Please try again.'
      );
    } else {
      createGallery(arrey.data.hits);
      Notiflix.Notify.info(
        `Hooray! We found ${
          arrey.data.totalHits - gallery.children.length
        } images.`
      );
    }
  });
}

function createGallery(photos) {
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
