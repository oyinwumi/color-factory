import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function AddColor({inputValue, setInputValue , color, setColor ,colorValue, setColorValue}) {
  

    const changeColor = (e) =>{
        setColor(e.target.value)
    }

    let navigate = useNavigate();
    const routeChange = () =>{
      let path = `/`;
      navigate(path)
    }

  return (
 <div>
       <div className='form-container'>
      <form action="">
        <label htmlFor="color">Enter a Color</label>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} /><br />
        <label htmlFor="color">Select Color</label>
        <input type="color"  id='select-color' onChange={changeColor}/><br />
        <button onClick={routeChange}>Add Color</button>
        </form> 
        <Link to="/">Go back to Home</Link>
    </div>
   
 </div>
  );
}

