import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/Ajout'
//import Error
//import Locations


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </Router>
  );
}

export default App;
