import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import Product from './pages/Product';
import Result from './pages/Result';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/result" component={Result}/>
        <Route exact path="/:productId" component={Product}/>
      </Switch>
    </BrowserRouter>
  )
}

export default App;