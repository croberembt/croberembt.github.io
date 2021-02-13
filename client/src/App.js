import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import background from './images/background.jpg'; 
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App" style={{backgroundImage: `url(${background})`}}>
            My Portfolio is cool
        </div>
    </BrowserRouter>
  );
}

export default App;
