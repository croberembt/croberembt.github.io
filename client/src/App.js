import React  from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'; 
import Navbar from './components/Navbar/Navbar'; 
import About from './components/About/About'; 
import Projects from './components/Projects/Projects'; 
import Home from './components/Home/Home';

const App = () => {

  return (
    <Router>
      <div className='container'>
        
        <Navbar />

        {/* <Home />

        <About /> */}

        <Projects />

          {/* <div className='container'>
            <div className='row text-sm-center'>
              <div className='col-sm'>
                  <NavLink exact={true} className='link' exact to='/'><div className='link'>Home</div></NavLink>
              </div>
              <div className='col-sm'>
                  <NavLink className='link' to='/about'><div className='link'>About</div></NavLink>
              </div>
              <div className='col-sm'>
                  <NavLink className='link' to='/projects'><div className='link'>Projects</div></NavLink>
              </div>
            </div>
          </div> */}

          {/* <div>
            <Switch>
              <Route exact path='/' component={HomePage} />
            </Switch>
            <Switch>
              <Route exact path='/about' component={About} />
            </Switch>
            <Switch>
              <Route exact path='/projects' component={Projects} />
            </Switch>
          </div> */}

        </div>
    </Router>
  );
}

export default App;
