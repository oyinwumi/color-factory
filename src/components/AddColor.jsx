import React, { useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
// import Red from "./Red";
// import Green from "./Green";
// import Blue from "./Blue";
// import NewColor from './NewColor';



export default function AddColor({inputValue, setInputValue , color, setColor ,colorValue, setColorValue}) {
  
  const[prevColor, setPrevColor] = useState([
    // <Red/>,
    // <Green/>,
    // <Blue/>
  ]);
    const changeColor = (e) =>{
        setColor(e.target.value)
    }

    let navigate = useNavigate();
    const routeChange = () =>{
      let path = `/`;
      navigate(path)
    }
    const updateNewColor = () =>{
      const colors ={
       inputValue,
        color,
    };
    
       if(prevColor === "" )
       return alert("select a color")
       const addedColor =[...prevColor, colors]
       console.log(addedColor)
   console.log(setPrevColor(addedColor))
       
    
    }
  
  return (
 <div>
       <div className='form-container'>
      <form action="">
        <label htmlFor="color">Enter a Color</label>
        <input type="text" onChange={(e) => setInputValue(e.target.value)} /><br />
        <label htmlFor="color">Select Color</label>
        <input type="color"  id='select-color' onChange={changeColor}/><br />
        <button  onClick={() =>updateNewColor(color)}>Add Color</button>
        </form> 
        <Link to="/">Go back to Home</Link>
    </div>
   
 </div>
  );
}

