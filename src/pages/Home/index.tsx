import React, { useEffect, useState, useMemo } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';

import Main from '../Main';
import api from '../../services/api';

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
  const [categorias, setCategorias] = useState<ICategory[]>([]);

  useEffect(() => {
    async function loadCategorias(): Promise<void> {
      const response = await api.get<ICategory[]>('/categorias', {
        params: {
          _embed: 'videos',
        },
      });

      setCategorias(response.data);
    }

    loadCategorias();
  }, []);

  const firstCategory = useMemo(() => {
    if (categorias.length) {
      const [first] = categorias;

      return first;
    }

    return null;
  }, [categorias]);

  const otherCategories = useMemo(() => {
    if (categorias.length) {
      const newCategories = [...categorias];

      return newCategories.slice(1);
    }

    return null;
  }, [categorias]);

  return (
    <Main>
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
    </Main>
  );
};

export default Home;
