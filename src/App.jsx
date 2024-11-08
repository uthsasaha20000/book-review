import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Navbar from './components/navbar';
import Books from './components/books/books';
import About from './components/about';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/contact" element={<Contact />} />
          <Route path="/user/:id" element={<User />} /> */}
        </Routes>
        <button className="bg-red-300" onClick={() => setCount(count + 1)}>
          count = {count}
        </button>
      </>
    </Router>
  );
}

export default App;
