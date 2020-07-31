import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/devflix.png';
import ButtonLink from '../ButtonLink';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">
            <img className="logo" src={logo} alt="ReactFlix" />
          </Link>

          <ButtonLink to="/cadastro-video" className="button-link">
            Novo vídeo
          </ButtonLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
