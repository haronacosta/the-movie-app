/* eslint-disable react/prop-types */
import React from 'react';
import Movie from './Movie';

const ListMovies = ({ movies }) => (
  <div className="ListMovies">
    <div className="ListMovies__title">Popular movies</div>
    {movies.map(({ title, id, image }) => (
      <Movie title={title} id={id} key={id} image={image} />
    ))}
  </div>
);

ListMovies.propTypes = {};

export default ListMovies;
