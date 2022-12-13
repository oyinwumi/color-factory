import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div className='main-page'>
      <div className='nav'>
          <h1>Welcome to the Color Factory</h1>
            <Link to='/add'>Add a Color</Link>
        </div>
      <div className='body'>
        <h2> Please Select a Color </h2>
        <div className="color-list">
          <Link to="/red">Red</Link>
          <Link to="/green">Green</Link>
          <Link to="/blue">Blue</Link>
        </div>
      </div>
    </div>
  );
}
