import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddColor() {
    const[inputValue , setInputValue] = useState();
    const[color , setColor] = useState('');
    const[colorValue , setColorValue] = useState('')

    const changeColor = (value) =>{
        if (value === color){
            return value
        }
        setColor(value)
    }
  return (
    <div className='form-container'>
      <form action="">
        <label htmlFor="color">Enter a Color</label>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} /><br />
        <label htmlFor="color">Select Color</label>
        <input type="color"  id='select-color' onChange={changeColor}/><br />
        <button onClick={() =>setColorValue(inputValue)}>Add Color</button>
        </form> 
        <Link to="/">Go back to Home</Link>
        {colorValue}
    </div>
  );
}

