import React from 'react';

function Textfield({ placeholder, type, id, name, value, onChange, style, disabled }) {
  return (
    <div className=''>
      <input
        className={`border border-[#A5A5A5] rounded-lg focus:outline-none  ${style}`}
        id={id}
        type={type}
        placeholder={placeholder}
        name={name}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </div>
  );
}
export default Textfield;