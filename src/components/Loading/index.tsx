import React from 'react';
import ReactLoading from 'react-loading';

import { Container } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <ReactLoading color="#18d661" type="cubes" />
    </Container>
  );
};

export default Loading;
