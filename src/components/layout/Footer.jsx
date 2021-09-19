import React from 'react';

const Footer = () => (
  <footer className="Footer">
    Code by{' '}
    <a
      className="Footer__url"
      href="https://github.com/haronacosta"
      target="_blank"
      rel="noreferrer"
    >
      Haron Acosta
    </a>
    . <span className="Footer__text"> Movies content from</span>
    <a href="https://www.themoviedb.org/" target="_blank" rel="noreferrer">
      <img
        className="Footer__image"
        src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg"
        alt="The Movie DB"
      />
    </a>
  </footer>
);

export default Footer;
