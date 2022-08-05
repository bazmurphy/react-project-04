import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGallery from "./components/CardGallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardGallery />
    </div>
  );
}

export default App;