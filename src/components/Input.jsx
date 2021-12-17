import React from 'react';

const Input = ({ label, name, defaultValue, type, required, disabled, hidden}) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3'>
      <span>{label}</span>
      <input
        disabled = {disabled}
        required={required}
        type={type}
        name={name}
        className='input'
        defaultValue={defaultValue}
        hidden={hidden}
      />
    </label>
  );
};

export default Input;