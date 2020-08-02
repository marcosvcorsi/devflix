import React, { useMemo } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import Main from '../Main';
import { useApi } from '../../hooks/api';
import Loading from '../../components/Loading';

import { Container, LoadingContainer } from './styles';

interface ICategory {
  id: number;
  cor: string;
  titulo: string;
  link_extra: {
    text: string;
    url: string;
  };
  videos: {
    id: number;
    titulo: string;
    url: string;
  }[];
}

const Home: React.FC = () => {
  const { data } = useApi<ICategory[]>('categorias?_embed=videos');

  const firstCategory = useMemo(() => {
    if (data && data.length) {
      const [first] = data;

      return first;
    }

    return undefined;
  }, [data]);

  const otherCategories = useMemo(() => {
    if (data && data.length) {
      return data.slice(1);
    }

    return undefined;
  }, [data]);

  return (
    <Main isHome>
      <Container>
        {!data && (
          <LoadingContainer>
            <Loading />
          </LoadingContainer>
        )}

        {firstCategory && (
          <>
            <BannerMain
              videoTitle={firstCategory.videos[0].titulo}
              url={firstCategory.videos[0].url}
              videoDescription="Na Live de Abertura da Imersão React, vamos analisar as aplicações da tecnologia em aplicações que usamos no dia a dia, além de tirar dúvidas sobre a Imersão."
            />

            <Carousel ignoreFirstVideo category={firstCategory} />
          </>
        )}

        {otherCategories &&
          otherCategories.map(otherCategory => (
            <Carousel key={otherCategory.id} category={otherCategory} />
          ))}
      </Container>
    </Main>
  );
};

export default Home;
