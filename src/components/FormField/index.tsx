import React, { ChangeEvent } from 'react';

import { Container, Label, LabelText, Input, TextArea } from './styles';

interface Props {
  name: string;
  label: string;
  value: string;
  type?: string;
  multiline?: boolean;
  suggestions?: string[];
  onChange(evt: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void;
}

const FormField: React.FC<Props> = ({
  name,
  value,
  onChange,
  label,
  type = 'text',
  multiline = false,
  suggestions,
}) => {
  const field_id = `id-${name}`;

  return (
    <Container>
      <Label htmlFor={field_id}>
        {multiline ? (
          <TextArea
            id={field_id}
            name={name}
            value={value}
            onChange={onChange}
          />
        ) : (
          <Input
            id={field_id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            autoComplete={suggestions ? 'off' : undefined}
            list={`suggestion-${name}`}
          />
        )}

        <LabelText>{label}</LabelText>
        <datalist id={`suggestions-${name}`}>
          {suggestions &&
            suggestions.map(suggestion => (
              <option
                key={`suggestion-option-${name}-${suggestion}`}
                value={suggestion}
              >
                {suggestion}
              </option>
            ))}
        </datalist>
      </Label>
    </Container>
  );
};

export default FormField;
