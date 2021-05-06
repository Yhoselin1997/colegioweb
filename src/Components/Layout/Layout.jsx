import React from 'react';
import { Container } from 'react-bootstrap';

import Slider from '../Carrusel/Slider';
import Navbar from '../Navbar/Navbar';

const Layout = ({ withSlider = false, children }) => {
  return (
    <>
      <Navbar dynamic={withSlider} />
      <Container>
        {withSlider && (
          <Slider />
        )}
        {children}
      </Container>
      <div style={{background: 'red'}}>
        <Container>
          footer
        </Container>
      </div>
    </>
  );
};

export default Layout;