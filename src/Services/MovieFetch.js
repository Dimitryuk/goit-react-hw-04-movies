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

export async function fetchPopularMovies() {
  const response = await fetchMovies('trending/movie/day');
  return response.results;
}

export async function fetchMoviesById(id) {
  const response = await fetchMovies(`movie/${id}`);
  return response;
}
export async function fetchCastById(id) {
  const response = await fetchMovies(`movie/${id}/credits`);
  return response.cast;
}
export async function fetchReviewById(id) {
  const response = await fetchMovies(`movie/${id}/reviews`);
  return response.results;
}
export async function fetchMoviesByQuery(query) {
  return axios
    .get(
      `${BASE_URL}search/movie?api_key=${API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`,
    )
    .then(r => r.data.results);
}
