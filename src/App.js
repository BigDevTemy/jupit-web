import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './container/Home'
import Aboutus from './container/Aboutus'
import 'aos/dist/aos.css'
function App() {
  return (
    <div className="App">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
        </Routes>
    </div>
  );
}

export default App;
