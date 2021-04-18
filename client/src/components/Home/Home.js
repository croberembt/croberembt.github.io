import React from 'react';
import { Card } from 'reactstrap'; 

const Home = () => {

  return (
    <div className='container'>
      <Card style={{backgroundColor: 'transparent'}}>
        Hello, I'm Calli Oberembt, a full stack developer located in Saint Paul, MN.
      </Card>
      <Card style={{backgroundColor: 'transparent'}}>
        Contact me here. 
      </Card>
      <Card style={{backgroundColor: 'transparent'}}>
        Check out my full stack React online store app here.
      </Card>
      <Card style={{backgroundColor: 'transparent'}}>
        Check out my full stack React travel log app here. 
      </Card>
      <Card style={{backgroundColor: 'transparent'}}>
        Check out my full stack React and Postgres to do list app here.
      </Card>
    </div>

  );
}

export default Home;