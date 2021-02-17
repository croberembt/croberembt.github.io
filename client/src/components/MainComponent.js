import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from 'react-router-dom'; 
import HomeComponent from './HomeComponent'; 
import AboutComponent from './AboutComponent'; 
import ProjectsComponent from './ProjectsComponent'; 

const MainComponent = () => {

  return (
    <Router>
        <div className='container'>
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
        </div>
        <div>
          <Switch>
            <Route exact path='/' component={HomeComponent} />
          </Switch>
          <Switch>
            <Route exact path='/about' component={AboutComponent} />
          </Switch>
          <Switch>
            <Route exact path='/projects' component={ProjectsComponent} />
          </Switch>
        </div>
    </Router>
  );
}

export default MainComponent;