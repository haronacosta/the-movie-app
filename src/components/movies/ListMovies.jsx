/* eslint-disable react/prop-types */
import React from 'react';
import Movie from './Movie';

const ListMovies = ({ movies }) => (
  <div className="ListMovies">
    <div className="ListMovies__title">POPULAR MOVIES</div>
    {movies.map(({ title, id, poster }) => (
      <Movie title={title} id={id} key={id} poster={poster} />
    ))}
  </div>
);

ListMovies.propTypes = {};

export default ListMovies;
