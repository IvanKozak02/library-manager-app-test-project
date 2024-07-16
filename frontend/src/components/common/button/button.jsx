import React from 'react';
import './button.css';
const Button = ({label, ...props}) => {
    return (
        <button {...props}>{label}</button>
    );
};

export default Button;