import React, { useCallback, FormEvent } from 'react';
import { Link } from 'react-router-dom';

import Main from '../Main';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useForm } from '../../hooks/form';

import {
  Container,
  ButtonContainer,
  CategoryList,
  CategoryItem,
} from './styles';
import api from '../../services/api';
import { useApi } from '../../hooks/api';
import { useToast } from '../../hooks/toast';

interface ICategory {
  id?: number;
  titulo: string;
  descricao: string;
  cor: string;
}

const CadastroCategoria: React.FC = () => {
  const { data, mutate } = useApi<ICategory[]>('categorias');
  const { success, error } = useToast();

  const initFormValues = {
    titulo: '',
    descricao: '',
    cor: '#000000',
  };

  const { values: categoria, handleChange, clear } = useForm<ICategory>(
    initFormValues,
  );

  const handleSubmit = useCallback(
    async (evt: FormEvent) => {
      try {
        evt.preventDefault();

        await api.post('/categorias', categoria);

        clear();
        mutate();

        success('Categoria cadastrada com sucesso!');
      } catch (err) {
        console.log(err);

        error('Erro ao cadastrar categoria');
      }
    },
    [categoria, clear, mutate, success, error],
  );

  return (
    <Main>
      <Container>
        <h2>Categoria existentes: </h2>

        <CategoryList>
          {data &&
            data.map(catItem => (
              <CategoryItem key={catItem.id} itemColor={catItem.cor}>
                <strong>{catItem.titulo}</strong>
                {catItem.descricao && <span>{catItem.descricao}</span>}
              </CategoryItem>
            ))}
        </CategoryList>

        <h2>Nova categoria:</h2>

        <form onSubmit={handleSubmit}>
          <FormField
            name="titulo"
            value={categoria.titulo}
            onChange={handleChange}
            label="Digite o titulo da categoria"
          />

          <FormField
            name="descricao"
            value={categoria.descricao}
            onChange={handleChange}
            label="Digite a descrição"
            multiline
          />

          <FormField
            name="cor"
            value={categoria.cor}
            onChange={handleChange}
            label="Selecione uma cor"
            type="color"
          />

          <ButtonContainer>
            <Link to="/cadastro-video">Voltar para vídeos</Link>

            <Button type="submit" className="form-button">
              Cadastrar
            </Button>
          </ButtonContainer>
        </form>
      </Container>
    </Main>
  );
};

export default CadastroCategoria;
