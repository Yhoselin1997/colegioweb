import React from 'react';

import Slider from '../Carrusel/Slider';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer'

const Layout = ({ withSlider = false, children }) => {
  return (
    <>
      <Navbar dynamic={withSlider} />
      {withSlider && (
        <Slider />
      )}
      
        {children}

      <Footer/>
    </>
  );
};

export default Layout;