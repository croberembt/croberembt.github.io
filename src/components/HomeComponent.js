import React, { Component } from 'react'; 

class Home extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {};
    }

    render () {
        return (
            <div className='container-fluid'>
                <div className='row'>
                    Hi! I'm Calli Oberembt, a full stack developer living in St. Paul, MN. 
                </div>
                <div className='row'>
                    With 5+ years of professional experience working in teams and 2 years of software development experience, I am ready to solve the unique problems you are facing. 
                </div>
                <div className='row'>
                    You can see my projects HERE. You can follow my code HERE. 
                </div>
            </div>
        );
    }
}

export default Home;