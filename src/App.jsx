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
    location.pathname.split('/')[1] === ''
      ? 'popular'
      : location.pathname.split('/')[1]
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
            path="/"
            element={<ListMovies movies={movies} category={category} />}
          />
          <Route
            path="upcoming"
            element={<ListMovies movies={movies} category={category} />}
          />
          <Route
            path="popular"
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
