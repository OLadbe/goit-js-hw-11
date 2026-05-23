import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
import { getImagesByQuery } from "./pixabay-api";
import { createGallery, clearGallery, showLoader, hideLoader } from "./render-functions";


const userInput = document.querySelector('input[name="search-text"]');
const userForm = document.querySelector(".form");

userForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const search = userInput.value.trim();
    showLoader();
    getImagesByQuery(search)
        .then(data => {
            if (data.hits.length === 0) {
                return iziToast.error({message: "Sorry, there are no images matching your search query. Please try again!", position: 'center'});
            }
            clearGallery();
            createGallery(data.hits);
        })
        .catch(error => console.log(error))
        .finally(() => hideLoader());
    userForm.reset();
    
    
});