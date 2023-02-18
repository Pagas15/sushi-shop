import React, { useState } from 'react';

const Input = ({ title = '', type = 'text', name, required = false }) => {
  const [value, setValue] = useState('');

  const onChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <label className="inputBox">
      <input
        type={type}
        className="inputBox__input"
        value={value}
        onChange={onChange}
        name={name}
        required={required}
      />
      {!!title && <span className="inputBox__title">{title}</span>}
    </label>
  );
};

export default Input;
