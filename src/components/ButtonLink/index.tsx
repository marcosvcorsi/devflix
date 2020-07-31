import React from 'react';
import { Button } from './styles';

interface Props {
  to: string;
  className?: string;
}

const ButtonLink: React.FC<Props> = ({ to, children, className }) => {
  return (
    <Button to={to} className={className}>
      {children}
    </Button>
  );
};

export default ButtonLink;
