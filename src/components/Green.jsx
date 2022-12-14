import React from 'react';
import { Link } from 'react-router-dom';

export default function Green() {
  return (
    <div style={{backgroundColor: "green" , color: 'white', padding: '4rem', height: "100vh"}} >
       <div>
      <h1>This is Color Green with Hex</h1>
      <Link to="/" className='color-list'>Go Back</Link>
    </div>
    </div>
  );
}
