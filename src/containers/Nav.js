/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { toggle } from '../helper/index';
import { LOGOUT_USER } from '../actions/index';

const Nav = props => {
  const { text, store, logout } = props;
  const handleClick = () => {
    toggle();
    logout();
  };
  let path = '/profile';
  if (store.user.details !== null) {
    if (store.user.details.details !== null) {
      path = store.user.details.details.admin === true ? '/admin' : '/profile';
    }
  }
  return (
    <nav>
      <div onClick={toggle} className="hamburger">
        <div className="line" />
        <div className="line" />
        <div className="line" />
      </div>
      <h4 className="current-text">{text}</h4>
      <ul className="nav-links">
        <li onClick={toggle}>
          <Link to="/">Home</Link>
        </li>
        <li onClick={toggle}>
          <Link to={path}>Profile</Link>
        </li>
        <li onClick={handleClick}>
          <Link to="/">Logout</Link>
        </li>
      </ul>
      <div className="profile has-text-danger has-background-black">
        <i className="fas fa-lock" />
      </div>
    </nav>
  );
};

const mapDispatchToProps = {
  logout: LOGOUT_USER,
};

const mapStateToProps = store => ({ store });

Nav.propTypes = {
  store: PropTypes.shape({
    user: PropTypes.shape({
      auth_token: PropTypes.string,
    }).isRequired,
  }).isRequired,
  text: PropTypes.string.isRequired,
  logout: PropTypes.func.isRequired,
};

Nav.propTypes = {
  store: PropTypes.shape({
    details: PropTypes.shape({}),
    user: PropTypes.shape({
      details: PropTypes.shape({
        details: PropTypes.shape({
          admin: PropTypes.bool,
        }),
      }),
    }),
  }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
