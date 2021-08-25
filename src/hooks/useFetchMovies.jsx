import { useEffect, useState } from 'react';
import getMovies from '../helpers/getMovies';

const useFetchMovies = (category) => {
  const [state, setState] = useState({
    movies: [],
    loading: true,
    error: false,
  });

  useEffect(() => {
    getMovies(category)
      .then((movies) => {
        setState({
          ...state,
          movies,
          loading: false,
        });
      })
      .catch(() =>
        setState({
          ...state,
          error: true,
        })
      );
  }, [category]);

  return state;
};

export default useFetchMovies;
