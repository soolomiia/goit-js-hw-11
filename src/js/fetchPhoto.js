import axios from 'axios';

export default function fetchPhoto(query, page) {
  const URL = 'https://pixabay.com/api/';
  const key = '31548942-d4dee79ea280be64ae3531ff9';
  const option =
    'image_type=photo&orientation=horizontal&safesearch=true&per_page=40';

  return axios.get(`${URL}?key=${key}&q=${query}&${option}&page=${page}`);
}
