import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { HashRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Routes>
          <Route path="/home/*" element={<Home />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

export default App;