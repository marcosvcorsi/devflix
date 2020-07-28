import React from 'react';
import { Button } from './styles';

interface Props {
  to: string;
}

const ButtonLink: React.FC<Props> = ({ to, children }) => {
  return <Button to={to}>{children}</Button>;
};

export default ButtonLink;
