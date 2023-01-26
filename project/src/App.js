import './App.css';
import Navigation from './components/Navigation';
import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import AboutPage from './pages/AboutPage'
import SearchPage from './pages/SearchPage'
import HomePage from './pages/HomePage'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
          <Navigation/>
            <Routes>
              <Route path="/" element={<HomePage/>}></Route>
              <Route path="/about" element={<AboutPage/>}></Route>
              <Route path="/search" element={<SearchPage/>}></Route>
            </Routes>
        </Router>
      </header>
      <footer>
        CS 361 - Eli Kurlbaum - 2023
      </footer>
    </div>
  );
}


export default App;
