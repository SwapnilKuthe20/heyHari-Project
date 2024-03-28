import React, { useState } from 'react'

const RoundedImage = ({src,alt,value,className,isStausRing=false}) => {
  return (
    <div className='mt-4 ms-4'>
      <div className=" w-12 mt-4 rounded-full  ">
        <img src={src} alt={alt}   className={`relative ${isStausRing ? 'ring ring-offset-2 ring-[#4F8BED] rounded-full ' : 'none'}`}  />
          <span 
          className={`absolute bg-red-600 text-white w-4 text-center text-[10px] rounded-full ${className}`}
          style={{ display: value ? 'block' : 'none' }} >
          {value} 
        </span>
      </div>
    </div>
  )
}


export default RoundedImage

