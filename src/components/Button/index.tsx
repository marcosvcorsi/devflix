import React from 'react';

import { Container } from './styles';

interface Props {
  type?: 'button' | 'submit' | 'reset';
}

const Button: React.FC<Props> = ({ children, type = 'button' }) => {
  return <Container type={type}>{children}</Container>;
};

export default Button;
