import React, { useState } from 'react' 
import Badge from './Badge';

const RoundedImage = ({ imageUrls, alt,  isStatusRing = false, width }) => {
  return (
    <div className={`mt-4 ms-4 border-0 `} >
      {imageUrls?.map((imageUrl, index) => (
        <div key={index} className={` mt-4 rounded-full ${width ? (`w-${width}`):"w-12"}`}>
          <img  src={imageUrl.src} alt={alt} className={`relative w-full  ${isStatusRing ? 'ring ring-offset-2 ring-[#4F8BED] rounded-full' : ''}`} />
         <Badge/>
        </div>
      ))}
    </div>
  );
}

export default RoundedImage;


