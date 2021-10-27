// const APIKey = '25b7204add6551acf49d83c3d4684c10';
// const BaseAPI = 'https://api.themoviedb.org/3/';

import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const API_KEY = '25b7204add6551acf49d83c3d4684c10';

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  api_key: API_KEY,
};

export default async function fetchMovies(url, query) {
  const response = await axios(url, { params: { query } });
  return response.data;
}
