import React from 'react';
import './Projects.css';

const Projects = () => {

  return (
    <div className='projects'>
      <div className='container'>

          <div className='project-card'>
            <div><h2>Full Stack React Online Store</h2></div>
            <div><h4>Full Stack React Online Store</h4></div>
            <div>Full Stack React Online Store</div>
            <a href="#">See It Live</a>
          </div>
     
          <div className='project-card'>
            <div><h2>Full Stack React Travel Log</h2></div>
            <div><h4>Full Stack React Travel Log</h4></div>
            <div>Full Stack React Travel Log</div>
            <a href="#">See It Live</a>
          </div>


          <div className='project-card'>
            <div><h2>Full Stack React To Do List</h2></div>
            <div><h4>Full Stack React and Postgres To Do List</h4></div>
            <div>Full Stack React To Do List</div>
            <a href="#">See It Live</a>
          </div>

        </div>
    </div>
  );
}

export default Projects;