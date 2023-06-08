import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import PropertyPath from "./components/Paths/PropertyPath";
import Navbar from "./components/Navbar/Navbar/Navbar";

const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/property/:id" element={<PropertyPath />} />
      </Routes>
    </Router>
  );
};

export default App;
