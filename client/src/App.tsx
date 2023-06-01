
import './App.css'

// third party libraries
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'


// sections
import { Home } from './pages/Home';
import { Give } from './pages/Give';



function App() {


  return (
    <>
     <Router>
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Home />} />
          <Route path="/adopt" element={<Home />} />
          <Route path="/give" element={<Give />} />
          <Route path="/contact" element={<Home />} />
          <Route path="*" element={<h1>ERROR!</h1>} />

        </Routes>

      </Router>
  
    </>
  )
}

export default App
