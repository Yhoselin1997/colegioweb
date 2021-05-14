import React from 'react';
import { Container } from 'react-bootstrap';

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
      <Container>
        {children}
      </Container>
      <Footer/>
    </>
  );
};

export default Layout;