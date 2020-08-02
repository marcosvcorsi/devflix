import React, { useCallback, FormEvent, useMemo } from 'react';
import { Link, useHistory } from 'react-router-dom';

import Main from '../Main';
import FormField from '../../components/FormField';
import { useForm } from '../../hooks/form';
import api from '../../services/api';

import { Container, ButtonContainer } from './styles';
import { useApi } from '../../hooks/api';
import Button from '../../components/Button';
import { useToast } from '../../hooks/toast';

interface ICategory {
  id: number;
  titulo: string;
  cor: string;
}

const CadastroVideo: React.FC = () => {
  const history = useHistory();

  const { data } = useApi<ICategory[]>('categorias');
  const { success, error } = useToast();

  const { values, handleChange } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  const suggestionCategories = useMemo(() => {
    if (data && data.length) {
      return data.map(categorie => categorie.titulo);
    }

    return [];
  }, [data]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      try {
        event.preventDefault();

        const { titulo, url, categoria } = values;

        if (data) {
          const findCategoria = data.find(cat => cat.titulo === categoria);

          if (findCategoria) {
            await api.post('/videos', {
              titulo,
              url,
              categoriaId: findCategoria.id,
            });

            success('Vídeo cadastrado com sucesso!');

            history.push('/');
          }
        }
      } catch (err) {
        console.log(err);

        error('Erro ao cadastrar vídeo');
      }
    },
    [data, history, values, success, error],
  );

  return (
    <Main>
      <Container>
        <h2>Cadastrar Novo Vídeo</h2>

        <form onSubmit={handleSubmit}>
          <FormField
            label="Título do Vídeo"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Categoria"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={suggestionCategories}
          />

          <ButtonContainer>
            <Link to="/cadastro-categoria">Ir para categorias</Link>
            <Button type="submit" className="form-button">
              Cadastrar
            </Button>
          </ButtonContainer>
        </form>
      </Container>
    </Main>
  );
};

export default CadastroVideo;
