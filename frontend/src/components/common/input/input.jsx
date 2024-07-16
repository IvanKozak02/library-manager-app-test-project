import React from 'react';

const Input = ({label, ...props}) => {
    const inputHeading = label ? <span className="input__heading">{label}</span> : null;
    return (
        <label className="input">
            {inputHeading}
            <input {...props}/>
        </label>
    );
};

export default Input;