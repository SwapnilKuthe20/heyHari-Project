import React, { useState } from 'react' 
import Badge from './Badge';

const RoundedImage = ({ imageUrls, alt,  isStatusRing = false }) => {
  // console.log(imageUrls,alt,isStatusRing);
  return (
    <div className='mt-4 ms-4 '>
      {imageUrls?.map((imageUrl, index) => (
        <div key={index} className="w-12 mt-4 rounded-full ">
          <img  src={imageUrl.src} alt={alt} className={`relative  ${isStatusRing ? 'ring ring-offset-2 ring-[#4F8BED] rounded-full' : ''}`} />
         <Badge/>
        </div>
      ))}
    </div>
  );
}

export default RoundedImage;


