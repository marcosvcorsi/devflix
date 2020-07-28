import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Main: React.FC = ({ children }) => {
  return (
    <>
      <Header />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Main;
