/* eslint-disable react/prop-types */
import React from 'react';
import Image from './Image';

const Movie = ({ id, title, poster }) => (
  <div className="Movie">
    <div className="Movie__image">
      <Image url={poster} alt={title} />
    </div>
    <div className="Movie__title" id={id}>
      {title}
    </div>
  </div>
);

export default Movie;
