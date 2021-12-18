import React from 'react';

const Input = ({ label, name, defaultValue, type, required, hidden, disabled}) => {
  return (
    <label htmlFor={name} className={!hidden === true?"flex flex-col my-3":"hidden"}>
      <span>{label}</span>
      <input
        disabled = {disabled}
        required={required}
        type={type}
        name={name}
        className='input'
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;