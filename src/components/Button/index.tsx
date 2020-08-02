import React from 'react';

import { Container } from './styles';

interface Props {
  type?: 'button' | 'submit' | 'reset';
  className?: string;
}

const Button: React.FC<Props> = ({ children, type = 'button', className }) => {
  return (
    <Container type={type} className={className}>
      {children}
    </Container>
  );
};

export default Button;
