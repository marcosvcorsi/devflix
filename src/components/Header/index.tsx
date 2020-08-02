import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/devflix.png';
import ButtonLink from '../ButtonLink';

import { Container } from './styles';

interface Props {
  isHome: boolean;
}

const Header: React.FC<Props> = ({ isHome }) => {
  return (
    <Container>
      <header>
        <nav>
          <Link to="/">
            <img className="logo" src={logo} alt="ReactFlix" />
          </Link>

          {isHome && (
            <ButtonLink to="/cadastro-video" className="button-link">
              Novo vídeo
            </ButtonLink>
          )}
        </nav>
      </header>
    </Container>
  );
};

export default Header;
