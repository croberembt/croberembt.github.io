import React from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import './App.css';


function App() {
  return (
    <BrowserRouter>
        <div className="App" style={{backgroundColor: 'purple'}}>
            My Portfolio
        </div>
    </BrowserRouter>
  );
}

export default App;
