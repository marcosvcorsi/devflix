import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../pages/Home';
import CadastroVideo from '../pages/CadastroVideo';
import CadastroCategoria from '../pages/CadastroCategoria';
import NotFound from '../pages/NotFound';

const Routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/cadastro-video" component={CadastroVideo} />
      <Route path="/cadastro-categoria" component={CadastroCategoria} />

      <Route component={NotFound} />
    </Switch>
  );
};

export default Routes;
