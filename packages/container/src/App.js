import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { connect } from "react-redux";
import DashboardApp from 'dashboard/DashboardApp';
import Header from './components/Header';
import Sidebar from './components/Sidebar';


const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

const Home =  connect(state => state)(({dispatch}) => (
  <div style={{display: "flex"}}>
  <h1>Home</h1>
  <button onClick={() => dispatch({ type: "INCREMENT" })}>Increment</button>
  </div>
))


function App() {
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

export default App;