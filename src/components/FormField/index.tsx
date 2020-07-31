import React, { ChangeEvent } from 'react';

import { Container, Label, LabelText, Input, TextArea } from './styles';

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
      <Label htmlFor={label}>
        {multiline ? (
          <TextArea name={name} value={value} onChange={onChange} />
        ) : (
          <Input name={name} type={type} value={value} onChange={onChange} />
        )}

        <LabelText>{label}</LabelText>
      </Label>
    </Container>
  );
};

export default FormField;
