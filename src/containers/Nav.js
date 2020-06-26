import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import toggle from '../helper/index';
import { LOGOUT_USER } from '../actions/index';

const Nav = props => {
  const { text, store, logout } = props;
  const handleClick = () => {
    toggle();
    logout();
  };
  const path = store.user.details.details === undefined
    ? '/profile'
    : store.user.details.details.admin === true
      ? '/admin'
      : 'profile';
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

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
