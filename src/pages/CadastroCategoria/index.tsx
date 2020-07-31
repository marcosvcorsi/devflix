import React, { useState, useCallback, FormEvent } from 'react';

import Main from '../Main';

import FormField from '../../components/FormField';
import Button from '../../components/Button';
import { useForm } from '../../hooks/form';

interface Category {
  nome: string;
  descricao: string;
  color: string;
}

const CadastroCategoria: React.FC = () => {
  const initFormValues = {
    nome: '',
    descricao: '',
    color: '#000000',
  };

  const [categorias, setCategorias] = useState<Category[]>([]);

  const { values: categoria, handleChange, clear } = useForm<Category>(
    initFormValues,
  );

  const handleSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();

      setCategorias([...categorias, categoria]);

      clear();
    },
    [categoria, categorias, clear],
  );

  return (
    <Main>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="nome"
          value={categoria.nome}
          onChange={handleChange}
          label="Digite o nome da categoria"
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

        <Button type="submit">Cadastrar</Button>
      </form>

      <ul>
        {categorias.map(item => (
          <li key={item.nome}>{item.nome}</li>
        ))}
      </ul>
    </Main>
  );
};

export default CadastroCategoria;
