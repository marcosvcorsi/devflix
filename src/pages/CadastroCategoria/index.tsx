import React, { useState, useCallback, FormEvent, useEffect } from 'react';
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

interface Category {
  id?: number;
  titulo: string;
  descricao: string;
  color: string;
}

const CadastroCategoria: React.FC = () => {
  const initFormValues = {
    titulo: '',
    descricao: '',
    color: '#000000',
  };

  const { values: categoria, handleChange, clear } = useForm<Category>(
    initFormValues,
  );

  const [categorias, setCategorias] = useState<Category[]>([]);

  const loadCategories = useCallback(async () => {
    const response = await api.get('/categorias');

    setCategorias(response.data);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleSubmit = useCallback(
    async (evt: FormEvent) => {
      evt.preventDefault();

      await api.post('/categorias', categoria);

      clear();

      await loadCategories();
    },
    [categoria, clear, loadCategories],
  );

  return (
    <Main>
      <Container>
        <h2>Categoria existentes: </h2>

        <CategoryList>
          {categorias.map(catItem => (
            <CategoryItem key={catItem.id} itemColor={catItem.color}>
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
            name="color"
            value={categoria.color}
            onChange={handleChange}
            label="Selecione uma cor"
            type="color"
          />

          <ButtonContainer>
            <Link to="/cadastro-video">Voltar para vídeos</Link>

            <Button type="submit">Cadastrar</Button>
          </ButtonContainer>
        </form>
      </Container>
    </Main>
  );
};

export default CadastroCategoria;
