import React from 'react';
import { Link } from 'react-router-dom';
import bgi from '../assets/bg2.jpg';

const Home = () => (
  <div style={{ backgroundImage: `url(${bgi})` }} className="h-screen bg-center bg-cover flex flex-col justify-center items-end">
    <div className="bg-gray-700 bg-opacity-80 shadow-xl rounded h-2/4 flex flex-col justify-center items-center p-4 m-2">
      <p className=" text-white text-5xl justify-self-start items-self-start">ResellA</p>
      <p className="text-4xl text-center text-gray-200 font-light">
        A place where you can sell your old stuff whithout hassle
      </p>
    </div>
    <div className="flexalign-center flex-col m-2">
      <button type="button" className="bg-white p-4 px-6 m-2 rounded"><Link to="/login" className="text-gray-900 font-semibold">LOGIN</Link></button>
      <button type="button" className="bg-white text-gray-900 p-4 px-6 m-2 rounded"><Link to="/signup" className="text-gray-900 font-semibold">SIGNUP</Link></button>
    </div>
  </div>
);

export default Home;
