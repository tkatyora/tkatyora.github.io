import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './componets/Proucts-services';
import Nanvbar from './componets/Navbar';
import Hero from './componets/hero';
import Footer from './componets/footer';





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nanvbar />
    <Hero/>
    <Products />
    <Footer />
  </React.StrictMode>
);

