import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  .logo {
    max-width: 168px;
  }
  @media (max-width: 800px) {
    .logo {
      max-width: 105px;
    }
  }

  .button-link {
    @media (max-width: 800px) {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      background: var(--primary);
      border-radius: 0;
      border: 0;
      text-align: center;
    }
  }

  nav {
    width: 100%;
    height: 94px;
    z-index: 100;

    display: flex;
    justify-content: space-between;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding-left: 5%;
    padding-right: 5%;

    background: var(--background);
    border-bottom: 2px solid var(--primary);
  }

  body {
    --bodyPaddingTop: 94px;
    padding-top: var(--bodyPaddingTop);
  }

  @media (max-width: 800px) {
    nav {
      height: 40px;
      justify-content: center;
    }
    body {
      --bodyPaddingTop: 40px;
      padding-top: var(--bodyPaddingTop);
    }
  }
`;
