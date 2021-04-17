import React from 'react';
import './Button.css'; 

const STYLES = ['custom-button', 'custom-button-sunset', 'custom-button-cotton-candy', 'custom-button-sea-foam']; 

export const Button = ({children, id, onClick, buttonStyle, style }) => {
  
const checkButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]; 

  return (
      <button
        id={id}
        className={`${checkButtonStyle}`}
        onClick={onClick}
        style={style}
      >
        {children}
      </button>
  );
}
