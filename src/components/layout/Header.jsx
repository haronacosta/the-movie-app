import React, { useEffect } from 'react';
import propTypes from 'prop-types';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Header = ({ setCategory }) => {
  const location = useLocation();

  const getCategory = () => {
    const category =
      location.pathname.split('/')[1] === ''
        ? 'popular'
        : location.pathname.split('/')[1];

    return category;
  };

  useEffect(() => {
    const category = getCategory();
    setCategory(category);
  }, [location]);

  return (
    <>
      <header className="header">
        <nav className="Menu">
          <ul className="Menu__items">
            <li className="Menu__item">
              <Link className="item--btn" to="/popular">
                THE MOVIE APP
              </Link>
            </li>
            <li className="Menu__item">
              <NavLink className="item--btn" to="/popular">
                Popular Movies
              </NavLink>
            </li>
            <li className="Menu__item">
              <NavLink className="item--btn" to="/upcoming">
                Upcoming Movies
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

Header.propTypes = {
  setCategory: propTypes.func.isRequired,
};

export default Header;
