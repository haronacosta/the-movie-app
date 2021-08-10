import React, { useEffect, useState } from 'react';
import './assets/scss/app.scss';
import Header from './componentes/layout/Header';
// import Image from './componentes/movies/Image';
import ListMovies from './componentes/movies/ListMovies';

function App() {
  const apiUrl = 'https://api.themoviedb.org/3/';

  const apiKey = '3b5c31ed638d62a93f1bab6729057395';

  const imagesUrl = 'https://image.tmdb.org/t/p/w500';

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}movie/popular?api_key=${apiKey}`)
      .then((resp) => resp.json())
      .then(({ results }) => {
        results.forEach((movie) => {
          fetch(`${apiUrl}movie/${movie.id}?api_key=${apiKey}&language=en-US`)
            .then((resp) => resp.json())
            .then((details) => {
              setMovies((movs) => [
                ...movs,
                {
                  id: movie.id,
                  image: `${imagesUrl}${details.poster_path}`,
                  title: movie.title,
                },
              ]);
            })
            .catch((error) => {
              console.error(error);
            });
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="App">
      <Header />

      <ListMovies movies={movies} />
    </div>
  );
}

export default App;
