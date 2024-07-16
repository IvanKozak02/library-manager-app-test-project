import React from 'react';
import './input.css';
const Input = ({label,labelClasses, ...props}) => {
    const inputHeading = label ? <span className="input__heading">{label}</span> : null;
    return (
        <label className={labelClasses}>
            {inputHeading}
            <input {...props}/>
        </label>
    );
};

export default Input;