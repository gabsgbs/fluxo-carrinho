import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Home from './pages/home';
import DetalheProduto from './pages/detalheProduto';
import Carrinho from './pages/carrinho';  

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Switch>
      <Route path='/' exact={true} component={Home}  />
      <Route path="/detalhe" component={DetalheProduto} />
      <Route path="/carrinho" component={Carrinho} />
    </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

