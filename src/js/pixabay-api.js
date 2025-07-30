const BASE_URL = 'https://pixabay.com/api/';
const KEY = '21553593-5dff095819739d8fe44d39f5a';

export function search(element) {
	const url = `${BASE_URL}?key=${KEY}&q=${element}&image_type=photo&orientation=horizontal&safesearch=true`

    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
}