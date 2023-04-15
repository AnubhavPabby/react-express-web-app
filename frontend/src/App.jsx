import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<Navbar />} />
      <Route path="home" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
