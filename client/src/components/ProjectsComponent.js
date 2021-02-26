import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap'; 
import background from '../images/background.jpg'; 

const ProjectsComponent = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md'>
          <Card style={{backgroundColor: 'black'}}>
            <CardBody>
              <CardTitle><h2>Full Stack React Online Store</h2></CardTitle>
              <CardSubtitle><h4>Full Stack React Online Store</h4></CardSubtitle>
            </CardBody>
              <img className='card-image' width="100%" src={background} alt="image of react online store" />
            <CardBody>
              <CardText>Full Stack React Online Store</CardText>
              <CardLink href="#">See It Live</CardLink>
            </CardBody>
          </Card>
        </div>
        <div className='col-md'>
          <Card style={{backgroundColor: 'black'}}>
            <CardBody>
              <CardTitle><h2>Full Stack React Travel Log</h2></CardTitle>
              <CardSubtitle><h4>Full Stack React Travel Log</h4></CardSubtitle>
            </CardBody>
              <img className='card-image' width="100%" src={background} alt="image of react online store" />
            <CardBody>
              <CardText>Full Stack React Travel Log</CardText>
              <CardLink href="#">See It Live</CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-6'>
          <Card style={{backgroundColor: 'black'}}>
            <CardBody>
              <CardTitle><h2>Full Stack React To Do List</h2></CardTitle>
              <CardSubtitle><h4>Full Stack React and Postgres To Do List</h4></CardSubtitle>
            </CardBody>
              <img className='card-image' width="100%" src={background} alt="image of react online store" />
            <CardBody>
              <CardText>Full Stack React To Do List</CardText>
              <CardLink href="#">See It Live</CardLink>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default ProjectsComponent;