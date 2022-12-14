import { React } from 'react';
import { Link } from 'react-router-dom';

export default function NewColor({inputValue, setInputValue , color, setColor ,colorValue, setColorValue}) {
 let updatedColor = color ;
 console.log(updatedColor)
  return (
  
        <div style={{backgroundColor: updatedColor, color: "white",  padding: '8rem',  height: "100vh"}}>
     <h2 >This is Color {inputValue} with Hex {color}</h2>
     <Link to="/"className='color-list' >Go Back</Link>
     </div>
  
  );
}
