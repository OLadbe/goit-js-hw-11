// webformatURL — посилання на маленьке зображення для списку карток у галереї
// largeImageURL — посилання на велике зображення для модального вікна
// tags — рядок з описом зображення. Підійде для атрибута alt
// likes — кількість вподобайок
// views — кількість переглядів
// comments — кількість коментарів
// downloads — кількість завантажень
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

export function createGallery(images) {    
  const markup = images.map(image => (
    `<li class="gallery-item">
        <a href="${image.largeImageURL}">
            <img src="${image.webformatURL}" alt="${image.tags}"/>
            <div class="info">
                <p class="info-item">
                    <b>Likes</b>
                    <span>${image.likes}</span>
                </p>
                <p class="info-item">
                    <b>Views</b>
                    <span>${image.views}</span>
                </p>
                <p class="info-item">
                    <b>Comments</b>
                    <span>${image.comments}</span>
                </p>
                <p class="info-item">
                    <b>Downloads</b>
                    <span>${image.downloads}</span>
                </p>
            </div>
        </a>
    </li>`
  )).join("");

  galleryContainer.insertAdjacentHTML("beforeend", markup);
  
  
  lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = "";
}

export function showLoader() {
    loader.classList.remove('is-hidden');
}

export function hideLoader() { 
    loader.classList.add('is-hidden');
}
