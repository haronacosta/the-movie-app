import React from 'react';
import './assets/scss/app.scss';
import Footer from './components/layout/Footer';
import Header from './components/layout/Header';
import useFetchMovies from './hooks/useFetchMovies';
import ListMovies from './components/movies/ListMovies';

function App() {
  const category = 'popular';

  const { movies, loading, error } = useFetchMovies(category);

  return (
    <div className="App">
      <Header />
      {loading && !error ? (
        <div className="Loading">Loading movies...</div>
      ) : (
        <ListMovies movies={movies} />
      )}

      {error && <div className="error">Error, please reload</div>}

      <Footer />
    </div>
  );
}

export default App;
