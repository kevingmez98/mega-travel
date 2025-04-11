// Atomo de Button básico
import React from 'react';

const CustomButton = ({ children, onClick, className = '', ...rest }) => (
    <button onClick={onClick} className={`btn ${className}`} {...rest}>
      {children}
    </button>
  );
export default CustomButton;