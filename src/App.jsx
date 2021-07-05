import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

//home component 
import Home from './components/Home';

//header & footer components
import Header from './components/Header';
import Footer from './components/Footer';

//information components
import Blog from './components/Blog';
import Contact from './components/Contact'
import Work from './components/Work';

function App () {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Work" component={Work} />
      </Switch>
      <Footer />
    </div>
  )
}

export default App;
