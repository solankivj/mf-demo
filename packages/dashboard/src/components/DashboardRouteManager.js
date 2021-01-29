import React, { Suspense } from 'react';
import { Provider } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import { store } from '../store';

const Dashboard = React.lazy(() => import('./Dashboard'))
const Product = React.lazy(() => import('./Product'))

const DashboardRouteManager = () => {
  return (
    <Provider store={store}>
      <Switch>
        <Suspense fallback={null}>
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/product" component={Product} />
        </Suspense>
      </Switch>
    </Provider>
  );
};

export default DashboardRouteManager;