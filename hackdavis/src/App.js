import logo from './logo.svg';
import './App.css';
import * as React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home/Home';
function App() {
  return (
     <BrowserRouter>
      <Routes>
      <Route path="/Home" element={<Home />} />
    
      </Routes>
    </BrowserRouter>

  );
}

export default App;
