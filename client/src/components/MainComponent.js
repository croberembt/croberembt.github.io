import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'; 

const MainComponent = () => {

  return (
    <Router>
        <div className='container'>
          <div className='row text-center'>
            <div className='col'>
                <Link className='link' to='/'><h4>Home</h4></Link>
            </div>
            <div className='col'>
                <Link className='link' to='/about'><h4>About</h4></Link>
            </div>
            <div className='col'>
                <Link className='link' to='/projects'><h4>Projects</h4></Link>
            </div>
          </div>
        </div>
    </Router>
  );
}

export default MainComponent;