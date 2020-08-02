import React from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import { Container } from './styles';

interface Props {
  isHome?: boolean;
}

const Main: React.FC<Props> = ({ children, isHome = false }) => {
  return (
    <>
      <Header isHome={isHome} />
      <Container>{children}</Container>
      <Footer />
    </>
  );
};

export default Main;
