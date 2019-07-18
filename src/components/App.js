import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Home from './Home';
import Services from './Services';
import About from './About';
import Contact from './contact/Contact';
import Footer from './Footer';
import '../App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className="container">
          <Navbar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/services" exact component={Services} />
            <Route path="/about" exact component={About} />
            <Route path="/contact" exact component={Contact} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
