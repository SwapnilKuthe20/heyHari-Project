import React from 'react';

function Textfield({ placeholder, type, id, name, value, handleChange, className, disabled }) {
  return (
    <div className=''>
      <input
        className={`border border-[#A5A5A5] rounded-lg focus:outline-none  ${className}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}
export default Textfield;