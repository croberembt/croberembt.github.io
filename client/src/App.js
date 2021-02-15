import React, { useEffect, useState } from 'react';
import './App.css';
import background from './images/background.jpg'; 
import background2 from './images/background2.jpg';
import MainComponent from './components/MainComponent'; 


const App = () => {

  const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

  const imageUrl = windowWidth >= 650 ? background : background2; 

  useEffect(() => {

    const handleWindowResize = () => {
      setWindowWidth(window.innerWidth); 
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize); 
    }
  }, []); 

  return (
      <div className='App' style={{backgroundImage: `url(${imageUrl})`, paddingTop: '2rem'}}>
        <MainComponent />
      </div>
  );
}

export default App;
