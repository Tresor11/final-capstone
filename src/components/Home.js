import React from 'react';
import { Link } from 'react-router-dom';
import bgi from '../assets/background.jpg';

const Home = () => (
  <div style={{ backgroundImage: `url(${bgi})` }} className="home">
    <h4>Welcome to the resell-app</h4>
    <p>
      A platform where you can sell
      <br />
      or by someone&apos;s partially used items
      for a friendly price
    </p>
    <div className="btn-cont">
      <button type="button" className="button is-black is-outlined is-rounded"><Link to="/login">LOGIN</Link></button>
      <button type="button" className="button is-black is-outlined is-rounded"><Link to="/signup">SIGNUP</Link></button>
    </div>
  </div>
);

export default Home;
