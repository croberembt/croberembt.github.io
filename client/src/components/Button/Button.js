import React from 'react';
import './Button.css'; 
import { Link } from 'react-router-dom'; 

const STYLES = ['custom-button-fill', 'custom-button-outline', 'btn--fill--danger', 'btn--outline--danger', 'btn--fill--success', 'btn--outline--success']; 

export const Button = ({children, id, type, onClick, buttonStyle }) => {
  
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 

  return (
    <Link to='/sign-up' className='btn-mobile'>
      <button
        id={id}
        className={`${checkButtonStyle}`}
        onClick={onClick}
        type='button'
      >
        {children}
      </button>
    </Link>
  );
}
