import React, { Component } from 'react';
import Home from './HomeComponent'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 
import Background from '../images/background.jpg'; 

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render () {

        const HomePage = () => {
            return (
                <Home />
            );
        };

        return (
            <div className='container-fluid' style={{ backgroundImage: `url(${Background})`}}>
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Redirect to='/home' />
                </Switch>
            </div>
        );
    }
}

export default Main;