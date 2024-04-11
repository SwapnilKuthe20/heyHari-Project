 
import React from 'react';
function Button ({buttonComp}){
 
  return (
    <>
      <Button className="bg-black">{buttonComp.title}</Button>
    </>
  );
}
 
export default Button;