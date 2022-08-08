import React from "react";
import './App.css';

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import CardGallery from "./components/CardGallery";

export default function App() {

  return (
    <div className="App">
      <Navbar />
      <Hero />
      <CardGallery />
    </div>
  );
}