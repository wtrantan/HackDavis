import "./App.css";
import * as React from "react";
import {useState} from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login";

function App() {
<<<<<<< HEAD
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
=======
  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  const handleLogout = () => {
    setIsLoggedIn(false);

  };
  const handleLogin = () => {
    setIsLoggedIn(true);

  };
  return (
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login handleLogin={handleLogin} handleLogout={handleLogout}/>} />
      </Routes>
    </BrowserRouter>

  );
>>>>>>> 4808993b7ce04f45c6abcfc95fef6a879eb85663
}

export default App;
