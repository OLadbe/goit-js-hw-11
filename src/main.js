import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';

const userForm = document.querySelector(".form");
const userInput = document.querySelector('input[name="search-text"]');
hideLoader();

userForm.addEventListener("submit", (event) => {
  event.preventDefault();
  
  const searchQuery = userInput.value.trim();

  if (searchQuery === "") {
    iziToast.error({
      message: "Please enter a search query!",
      position: 'topRight'
    });
    return;
  }

  clearGallery();

  showLoader();

  getImagesByQuery(searchQuery)
    .then(data => {

      hideLoader();


      if (data.hits.length === 0) {
        iziToast.error({
          message: "Sorry, there are no images matching your search query. Please try again!",
          position: 'topRight'
        });
        return;
      }


      createGallery(data.hits);
      userForm.reset()
    })
    .catch(error => {

      hideLoader();
      
      iziToast.error({
        message: "Something went wrong. Please try again later!",
        position: 'topRight'
      });
      console.error(error);
    });
});