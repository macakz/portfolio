import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './CSS/App.css';

//home component 
import Home from './components/Home';

//header & footer components
import Header from './components/Header&Footer/Header';
import Footer from './components/Header&Footer/Footer';

//information components
import Blog from './components/Blog';
import Contact from './components/Contact'
import About from './components/About';

function App () {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Switch>
            <Route exact path="/portfolio" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
          </Switch>
        </div>
        <Footer />

      </div>
    </>
  )
}

export default App;
