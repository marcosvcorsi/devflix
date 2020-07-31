import styled from 'styled-components';

export const Container = styled.button`
  color: var(--white);
  border: 1px solid var(--white);
  background-color: var(--black);
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  transition: 0.3s;

  &:hover,
  &:focus {
    color: var(--primary);
    border: 1px solid var(--primary);
  }
`;
