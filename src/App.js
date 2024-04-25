import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/pages/home/Home'
import About from '../src/pages/about/About'
import Error from '../src/pages/error/Error';
import Locations from '../src/pages/locations/Locations'


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/About' element={<About />}/>
        <Route path='/Locations/:id'element={<Locations />}/>
        <Route path="*" element={<Error />}/> {/* Route pour gérer les autres chemins non définis */}
      </Routes>
    </Router>
  );
}

export default App;
