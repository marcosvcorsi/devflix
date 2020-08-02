import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 10px 0;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5px;

  .form-button {
    background-color: var(--primary);

    &:hover,
    &:focus {
      color: var(--background);
      opacity: 0.8;
    }
  }
`;
