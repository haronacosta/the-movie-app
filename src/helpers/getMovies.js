/* eslint-disable camelcase */
const getMovies = async (category) => {
  const apiUrl = 'https://api.themoviedb.org/3/';

  const apiKey = process.env.REACT_APP_API_KEY;

  const url = `${apiUrl}movie/${category}?api_key=${apiKey}&language=en-US`;

  const imagesBaseUrl = `https://image.tmdb.org/t/p/w500/`;

  const resp = await fetch(url);

  const data = await resp.json();

  const { results } = data;

  const movies = results.map(({ id, title, poster_path }) => ({
    id,
    title,
    poster: `${imagesBaseUrl}${poster_path}`,
  }));

  return movies;
};

export default getMovies;
