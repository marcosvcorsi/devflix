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

export const CategoryList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

interface CategoryItemProps {
  itemColor?: string;
}

export const CategoryItem = styled.li<CategoryItemProps>`
  display: flex;
  flex-direction: column;
  padding: 15px;
  opacity: 0.8;
  width: 100%;
  border-radius: 5px;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.25);
  max-width: 400px;
  background-color: ${props => (props.itemColor ? props.itemColor : '#18D661')};

  span {
    margin-top: 5px;
    font-size: 12px;
  }

  & + li {
    margin-top: 5px;
  }
`;
