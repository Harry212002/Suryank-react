import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './components/pages/Home';
import Service from './components/pages/Service'; // create this page if not yet
import Contact from "./components/pages/Contact";
import ProductPage from "./components/pages/ProductPage";
import ClientsPage from "./components/pages/ClientsPage";


const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      offset: 100,
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <div className='overflow-x-hidden bg-white dark:bg-black duration-300'>
      <Router basename="/">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/service" element={<Service />} />
          
          <Route path="/product" element={<ProductPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
