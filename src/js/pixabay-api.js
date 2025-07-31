import axios from 'axios';

const API_KEY = '45139433-b39febc8ea292e87313288c36';
const BASE_URL = 'https://pixabay.com/api/';

export async function fetchImages(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 21,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data.hits;
  } catch (error) {
    throw new Error('Error fetching images: ' + error.message);
  }
}
