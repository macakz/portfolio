import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Home from './components/Home';
import Header from './components/Header';
import Blog from './components/Blog';
import Contact from './components/Contact'
import Footer from './components/Footer';

function App () {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
