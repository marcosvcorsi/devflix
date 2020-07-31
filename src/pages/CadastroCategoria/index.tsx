import React, { useState, useCallback, ChangeEvent, FormEvent } from 'react';

import Main from '../Main';

import FormField from '../../components/FormField';
import Button from '../../components/Button';

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
  const [categoria, setCategoria] = useState<Category>(initFormValues);

  const handleChangeInput = useCallback(
    (evt: ChangeEvent<HTMLInputElement>) => {
      const newCategory = { ...categoria, [evt.target.name]: evt.target.value };

      setCategoria(newCategory);
    },
    [categoria],
  );

  const handleSubmit = useCallback(
    (evt: FormEvent) => {
      evt.preventDefault();

      setCategorias([...categorias, categoria]);
      setCategoria(initFormValues);
    },
    [categoria, categorias, initFormValues],
  );

  return (
    <Main>
      <h1>Cadastro de Categoria:</h1>

      <form onSubmit={handleSubmit}>
        <FormField
          name="nome"
          value={categoria.nome}
          onChange={handleChangeInput}
          label="Digite o nome da categoria"
        />

        <FormField
          name="descricao"
          value={categoria.descricao}
          onChange={handleChangeInput}
          label="Digite a descrição"
          multiline
        />

        <FormField
          name="color"
          value={categoria.color}
          onChange={handleChangeInput}
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
