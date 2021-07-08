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
import About from './components/About';
import BlogPost from './components/BlogPost';

function App () {
  return (
    <>
      <div className="page-container">
        <div className="content-wrap">
          <Header />
          <Switch>
            <Route exact path="/portfolio" component={Home} />
            <Route path="/blog" component={Blog} />
            <Route path="/blogpost" component={BlogPost} />
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
