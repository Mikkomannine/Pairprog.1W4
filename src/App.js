import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";
import "./app.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from "./components/Layout";
import removeTour from "./components/Tour";
import { useState } from "react";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/tours" element={<Tours />} />
          <Route path="/footer" element={<Footer />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
