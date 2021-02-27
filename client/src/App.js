import React from 'react';
import './App.css';
import MainComponent from './components/MainComponent'; 
import NavbarComponent from './components/NavbarComponent';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


const App = () => {

  return (
      <Router>
        <NavbarComponent />
      <Switch>
        <Route path='/' exact />
      </Switch>
      </Router>
  );
}

export default App;
