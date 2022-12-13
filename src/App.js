import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Red from './components/Red';
import Green from './components/Green';
import Blue from './components/Blue';
import AddColor from './components/AddColor';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path="/" element={<Navbar/>}/>
        <Route path='/add' element={<AddColor/>}/>
        <Route  path="/red" element={<Red/>}/>
        <Route path='/green'  element={<Green/>}/>
        <Route  path='/blue' element={<Blue/>}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
