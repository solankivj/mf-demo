import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import DashboardApp from 'dashboard/DashboardApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const Home = () => (
  <h1>Home</h1>
)

export default () => {
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
          <Header />
          <div style={{display: "flex", height: "100vh"}}>
            <Sidebar />
            <div>
              <Route exact path="/" component={Home} />
              <DashboardApp />
            </div>
          </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
