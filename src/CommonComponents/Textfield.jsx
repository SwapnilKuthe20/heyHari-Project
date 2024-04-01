
import React from 'react';

function Textfield({placeholder,type,name,value ,handleChange} ) {
  return (
    <div className='mt-4 ms-4'>
     <input 
     className=' border-2 p-2 rounded-lg w-3/2'
     type={type} 
     placeholder={placeholder} 
     name={name} 
     value={value}
     onChange={handleChange} 
     />
    </div>
  );
}

export default Textfield;
