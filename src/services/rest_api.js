import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const API_KEY = '2da3e938b4dbf31e7c00d8a01ff91cc3';
const BASE_POSTER_URL = 'https://image.tmdb.org/t/p/';

export const fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&page=1`
  );
  return data;
};

export const fetchMovie = async id => {
  const { data } = await axios.get(`movie/${id}?api_key=${API_KEY}`);
  return data;
};

export const fetchCredits = async id => {
  const { data } = await axios.get(`movie/${id}/credits?api_key=${API_KEY}`);
  return data;
};

export const fetchReviews = async id => {
  const { data } = await axios.get(`movie/${id}/reviews?api_key=${API_KEY}`);
  return data;
};

export const fetchQuery = async value => {
  const { data } = await axios.get(
    `search/movie?api_key=${API_KEY}&query=${value}`
  );
  return data;
};

export const getPosterUrl = (path, size) => BASE_POSTER_URL + size + path;
