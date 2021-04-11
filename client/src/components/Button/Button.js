import React from 'react';
import './Button.css'; 
import { Link } from 'react-router-dom'; 

const STYLES = ['custom-button', 'custom-button-sunset']; 

export const Button = ({children, id, onClick, buttonStyle }) => {
  
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        id={id}
        className={`${checkButtonStyle}`}
        onClick={onClick}
      >
        {children}
      </button>
    </Link>
  );
}
