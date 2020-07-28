import React from 'react';
import Header from '../../components/Header';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import dadosIniciais from '../../data/dados_iniciais.json';
import Footer from '../../components/Footer';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Header />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Na Live de Abertura da Imersão React, vamos analisar as aplicações da tecnologia em aplicações que usamos no dia a dia, além de tirar dúvidas sobre a Imersão."
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />

      <Carousel category={dadosIniciais.categorias[1]} />

      <Carousel category={dadosIniciais.categorias[2]} />

      <Footer />
    </Container>
  );
};

export default Home;
