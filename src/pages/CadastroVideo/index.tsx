import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../Main';

const CadastroVideo: React.FC = () => {
  return (
    <Main>
      <h1>Cadastro Video</h1>
      <Link to="/cadastro-categoria">Cadastro de categoria</Link>
    </Main>
  );
};

export default CadastroVideo;
