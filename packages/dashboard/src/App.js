import React from 'react';
import { Switch, Route, BrowserRouter, Link } from 'react-router-dom';
import MaterialLink from '@material-ui/core/Link';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import DashboardRouteManager from './components/DashboardRouteManager';

const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

const Nav = () => (
  <>
  <MaterialLink component={Link} to="/" color="inherit">
      Home
  </MaterialLink>{" "}
  <MaterialLink component={Link} to="/product" color="inherit">
      Product
  </MaterialLink>{" "}
  <MaterialLink component={Link} to="/dashboard" color="inherit">
      Dashboard
  </MaterialLink>
  </>
)

const Home = () => (
  <h1>Marketing Home</h1>
)

export default () => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
          <Nav />
          <Route exact path="/" component={Home} />
          <DashboardRouteManager />
        </BrowserRouter>
      </StylesProvider>
    </div>
  );
};
