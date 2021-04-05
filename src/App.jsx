import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-dom'
import About from './components/About';
import Home from './components/Home';
import News from './components/News';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/news' component={News} />
        </div>
        
      </Router>
    )
  }
}


export default App;
