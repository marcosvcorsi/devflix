import React, { ChangeEvent } from 'react';

import { Container } from './styles';

interface Props {
  name: string;
  label: string;
  value: string;
  type?: string;
  multiline?: boolean;
  onChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

const FormField: React.FC<Props> = ({
  name,
  value,
  onChange,
  label,
  type = 'text',
  multiline = false,
}) => {
  return (
    <Container>
      <label htmlFor={label}>
        {label}
        {multiline ? (
          <textarea name={name} value={value} onChange={onChange} />
        ) : (
          <input name={name} type={type} value={value} onChange={onChange} />
        )}
      </label>
    </Container>
  );
};

export default FormField;
