import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText, CardLink } from 'reactstrap'; 

const Projects = () => {

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <Card style={{backgroundColor: 'black'}}>
            <CardBody>
              <CardTitle><h2>Full Stack React Online Store</h2></CardTitle>
              <CardSubtitle><h4>Full Stack React Online Store</h4></CardSubtitle>
            </CardBody>
            <CardBody>
              <CardText>Full Stack React Online Store</CardText>
              <CardLink href="#">See It Live</CardLink>
            </CardBody>
          </Card>
        </div>
        <div className='col-md-6'>
          <Card style={{backgroundColor: 'black'}}>
            <CardBody>
              <CardTitle><h2>Full Stack React Travel Log</h2></CardTitle>
              <CardSubtitle><h4>Full Stack React Travel Log</h4></CardSubtitle>
            </CardBody>
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

export default Projects;