import axios from 'axios';


const options = { 
    key: "55964404-2a93521496c9cce28db3b5c43",
    q: "",
    image_type: "photo", 
    orientation: "horizontal",
    safesearch: true,
}

export function getImagesByQuery(query) { 
  const params = { ...options };
  params.q = query;
  return axios.get('https://pixabay.com/api/', { params: options })
    .then(response => response.data);
}

