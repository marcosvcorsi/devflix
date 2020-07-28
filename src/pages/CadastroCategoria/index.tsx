import React from 'react';

import Main from '../Main';

const CadastroCategoria: React.FC = () => {
  return (
    <Main>
      <h1>Cadastro de Categoria</h1>

      <form>
        <label htmlFor="categoria">
          Nome da Categoria:
          <input name="categoria" type="text" />
        </label>

        <button type="submit">Cadastrar</button>
      </form>
    </Main>
  );
};

export default CadastroCategoria;
