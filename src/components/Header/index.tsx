import React from 'react';

import logo from '../../assets/devflix.png';
import ButtonLink from '../ButtonLink';

import { Container } from './styles';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">
            <img className="logo" src={logo} alt="ReactFlix" />
          </Link>

          <ButtonLink to="/">Novo vídeo</ButtonLink>
        </nav>
      </header>
    </Container>
  );
};

export default Header;
