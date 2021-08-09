/* eslint-disable react/prop-types */
import React from 'react';
import Image from './Image';

const Movie = ({ id, title, image }) => (
  <div className="Movie">
    <div className="Movie__image">
      <Image url={image} alt={title} />
    </div>
    <div className="Movie__title" id={id}>
      {title}
    </div>
  </div>
);

export default Movie;
