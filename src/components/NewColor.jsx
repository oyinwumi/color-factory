import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function NewColor({ id , color}) {
   const [ update , setUpdate ] = useState({})
   
useEffect(() => {
 color.map(cols => {
   return cols.id === id && setUpdate({
      color:cols.colorValue,
      value:cols.value
   })
 })
}, [color , id])

  return (
  
        <div style={{backgroundColor:update.value, color: "white",  padding: '8rem',  height: "100vh", marginBottom: "2rem"}}>
     <h1 style={{ marginBottom: "2rem"}} >This is a  {update.color} color  with Hex code {update.value}</h1>
     <Link to="/"className='color-list' >Go Back</Link>
     </div>
  
  );
}