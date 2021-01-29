import React, { Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';

const Dashboard = React.lazy(() => import('./Dashboard'))
const Product = React.lazy(() => import('./Product'))

const DashboardRouteManager = () => {
  return (
    <Switch>
      <Suspense fallback={null}>
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/product" component={Product} />
      </Suspense>
    </Switch>
  );
};

export default DashboardRouteManager;