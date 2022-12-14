import { useState } from 'react';
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';
import AddColor from './components/AddColor';
import NewColor from './components/NewColor';


function App() {
  const[inputValue , setInputValue] = useState("");
    const[color , setColor] = useState("");
    // const[colorValue , setColorValue] = useState("")
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Navbar
          inputValue={inputValue}
          setInputValue={setInputValue}
          color={color}
          setColor={setColor}
          // colorValue={colorValue}
          // setColorValue={setColor}
        />}/>
        <Route path='/add' element={<AddColor 
        inputValue={inputValue}
        setInputValue={setInputValue}
        color={color}
        setColor={setColor}
        // colorValue={colorValue}
        // setColorValue={setColor}
        />}/>
        <Route  path="/new" element={<NewColor 
         inputValue={inputValue}
         setInputValue={setInputValue}
         color={color}
         setColor={setColor}
        // colorValue={colorValue}
        // setColorValue={setColor}
        />}/>
        <Route  path="/red" element={<Red/>}/>
        <Route path='/green'  element={<Green/>}/>
        <Route  path='/blue' element={<Blue/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
