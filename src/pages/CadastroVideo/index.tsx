import React, {
  useCallback,
  FormEvent,
  useState,
  useEffect,
  useMemo,
} from 'react';
import { Link, useHistory } from 'react-router-dom';

import Main from '../Main';
import FormField from '../../components/FormField';
import { useForm } from '../../hooks/form';
import Button from '../../components/Button';
import api from '../../services/api';

import { Container, ButtonContainer } from './styles';

interface ICategory {
  id: number;
  titulo: string;
  cor: string;
}

const CadastroVideo: React.FC = () => {
  const history = useHistory();

  const [categories, setCategories] = useState<ICategory[]>([]);

  const { values, handleChange } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      const response = await api.get<ICategory[]>('/categorias');

      setCategories(response.data);
    }

    loadCategories();
  }, []);

  const suggestionCategories = useMemo(() => {
    return categories.map(categorie => categorie.titulo);
  }, [categories]);

  const handleSubmit = useCallback(
    async (event: FormEvent) => {
      try {
        event.preventDefault();

        const { titulo, url, categoria } = values;

        const findCategoria = categories.find(cat => cat.titulo === categoria);

        if (findCategoria) {
          await api.post('/videos', {
            titulo,
            url,
            categoriaId: findCategoria.id,
          });

          history.push('/');
        }
      } catch (err) {
        console.log(err);
      }
    },
    [categories, history, values],
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
            <Button type="submit">Cadastrar</Button>
          </ButtonContainer>
        </form>
      </Container>
    </Main>
  );
};

export default CadastroVideo;
