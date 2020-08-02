import styled, { css } from 'styled-components';

interface InputProps {
  value?: string | number;
}

export const Container = styled.div`
  position: relative;
  textarea {
    min-height: 150px;
  }
  input[type='color'] {
    padding-left: 175px;
  }
`;

export const Label = styled.label``;

export const LabelText = styled.span`
  color: #e5e5e5;
  height: 57px;
  position: absolute;
  top: 0;
  left: 16px;

  display: flex;
  align-items: center;

  transform-origin: 0% 0%;
  font-size: 18px;
  font-style: normal;
  font-weight: 300;

  transition: 0.1s ease-in-out;
`;

export const Input = styled.input<InputProps>`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${LabelText} {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = !!value;

    return (
      hasValue &&
      css`
        &:not([type='color']) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;

export const TextArea = styled.textarea<InputProps>`
  background: #53585d;
  color: #f5f5f5;
  display: block;
  width: 100%;
  height: 57px;
  font-size: 18px;

  outline: 0;
  border: 0;
  border-top: 4px solid transparent;
  border-bottom: 4px solid #53585d;

  padding: 16px 16px;
  margin-bottom: 45px;

  resize: none;
  border-radius: 4px;
  transition: border-color 0.3s;

  &:focus {
    border-bottom-color: var(--primary);
  }
  &:focus:not([type='color']) + ${LabelText} {
    transform: scale(0.6) translateY(-10px);
  }

  ${({ value }) => {
    const hasValue = !!value;

    return (
      hasValue &&
      css`
        &:not([type='color']) + ${LabelText} {
          transform: scale(0.6) translateY(-10px);
        }
      `
    );
  }}
`;
