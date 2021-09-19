import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ setCategory }) => (
  <>
    <header className="header">
      <nav className="Menu">
        <ul className="Menu__items">
          <li className="Menu__item">
            <div className="item--title">THE MOVIE APP</div>
          </li>
          <li className="Menu__item">
            <button
              type="button"
              className="item--btn"
              onClick={() => setCategory('popular')}
            >
              Popular Movies
            </button>
          </li>
          <li className="Menu__item">
            <button
              type="button"
              className="item--btn"
              onClick={() => setCategory('now_playing')}
            >
              Incoming Movies
            </button>
          </li>
        </ul>
      </nav>
    </header>
  </>
);

Header.propTypes = {
  setCategory: PropTypes.func.isRequired,
};

export default Header;
