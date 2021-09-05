import React from 'react';
import './Projects.css';
import TravelLogPhoto from '../../assets/images/travel-log.png';
import ShoppingCartPhoto from '../../assets/images/react-shopping-cart.png';

const Projects = () => {

  return (
    <div className='projects'>

      <div className='projects-group'>

        <div className='project-card'>
          <img src={ShoppingCartPhoto} alt='a screenshot of my shopping cart portfolio website' />
          <h1>Full Stack React Online Store</h1>
          <h4>Full Stack React Online Store</h4>
          <div>Full Stack React Online Store</div>
          <a href='https://react-shopping-cart-test3.herokuapp.com/' target='_blank' rel='noreferrer'>See It Live</a>
        </div>

        <div className='project-card'>
          <img src={TravelLogPhoto} />
          <h1>Full Stack React Travel Log</h1>
          <h4>Full Stack React Travel Log</h4>
          <div>Full Stack React Travel Log</div>
          <a href='#'>See It Live</a>
        </div>
        
      </div>

      <div className='projects-group'>

        <div className='project-card'>
          <img src={TravelLogPhoto} />
          <h1>Full Stack To Do List With Postgres</h1>
          <h4>Full Stack React Travel Log</h4>
          <div>Full Stack React Travel Log</div>
          <a href='https://portfolio-postgres-to-do-list.herokuapp.com/' target='_blank' rel='noreferrer'>See It Live</a>
        </div>

        <div className='project-card'>
          <img src={TravelLogPhoto} />
          <h1>Full Stack React To Do List</h1>
          <h4>Full Stack React and Postgres To Do List</h4>
          <div>Full Stack React To Do List</div>
          <a href='#'>See It Live</a>
        </div>

      </div>

    </div>
  );
}

export default Projects;