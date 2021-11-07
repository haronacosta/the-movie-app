// Libs
import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// Components
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import useFetchMovies from './hooks/useFetchMovies';
import ListMovies from './components/movies/ListMovies';

// Styles
import './assets/scss/app.scss';

function App() {
  const location = useLocation();

  const [category, setCategory] = useState(
    location.pathname.split('/the-movie-app/')[1] === ''
      ? 'popular'
      : location.pathname.split('/the-movie-app/')[1]
  );

  const { movies, loading, error } = useFetchMovies(category);

  return (
    <div className="App">
      <Header setCategory={setCategory} />

      {loading && !error ? (
        <div className="Loading">Loading movies...</div>
      ) : (
        <Routes>
          <Route
            path="/the-movie-app"
            exact
            element={<ListMovies movies={movies} category={category} />}
          />
          <Route
            path="/the-movie-app/upcoming"
            exact
            element={<ListMovies movies={movies} category={category} />}
          />
          <Route
            path="/the-movie-app/popular"
            exact
            element={<ListMovies movies={movies} category={category} />}
          />
        </Routes>
      )}

      {error && <div className="error">Error, please reload</div>}

      <Footer />
    </div>
  );
}

export default App;
