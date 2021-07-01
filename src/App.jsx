import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Blog from './components/Blog';
function App () {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
      </Switch>
    </div>
  )
}

export default App;
