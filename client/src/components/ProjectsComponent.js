import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap'; 
import background from '../images/background.jpg'; 

const ProjectsComponent = () => {

  return (
    <div className='container'>
      <Card style={{backgroundColor: 'black'}}>
        <CardBody>
          <CardTitle><h1>Full Stack React Online Store</h1></CardTitle>
          <CardSubtitle><h3>Full Stack React Online Store</h3></CardSubtitle>
        </CardBody>
          <img className='card-image' width="100%" src={background} alt="image of react online store" />
        <CardBody>
          <CardText>Full Stack React Online Store</CardText>
          <CardLink href="#">See It Live</CardLink>
        </CardBody>
      </Card>
      <Card style={{backgroundColor: 'black'}}>
        <CardBody>
          <CardTitle><h1>Full Stack React Travel Log</h1></CardTitle>
          <CardSubtitle><h3>Full Stack React Travel Log</h3></CardSubtitle>
        </CardBody>
          <img className='card-image' width="100%" src={background} alt="image of react online store" />
        <CardBody>
          <CardText>Full Stack React Travel Log</CardText>
          <CardLink href="#">See It Live</CardLink>
        </CardBody>
      </Card>
      <Card style={{backgroundColor: 'black'}}>
        <CardBody>
          <CardTitle><h1>Full Stack React and Postgres To Do List</h1></CardTitle>
          <CardSubtitle><h3>Full Stack React and Postgres To Do List</h3></CardSubtitle>
        </CardBody>
          <img className='card-image' width="100%" src={background} alt="image of react online store" />
        <CardBody>
          <CardText>Full Stack React and Postgres To Do List</CardText>
          <CardLink href="#">See It Live</CardLink>
        </CardBody>
      </Card>
    </div>
  );
}

export default ProjectsComponent;