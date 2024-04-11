import React, { useState } from 'react';
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";

function Carousel({ imageUrls, alt, isStatusRing = true, }) {
    const [count, setCount] = useState(0)

    const handleClickNext = () => {
      if (imageUrls.length < 9 || count + 6 >= imageUrls.length) {
        setCount((count + 6) % imageUrls.length);
      } else {
        setCount(count => count + 6);
      }
    };
    
    const handleClickPrev = () => {
        setCount(Math.max(0, count - 6));
      };
      const slicedImages = imageUrls.slice(count, count + 9);
      return (
        <div className='flex gap-7 mt-4 ms-2 relative  '>
  
          {slicedImages?.map((url, index) => (
            <div key={index} className="rounded-full transition-transform ease-linear" style={{ transform: `translateX(-${count * 100 / imageUrls.length}%)` }}>
              <div className='w-14'>
                <img
                  src={url.src}
                  alt={alt}
                  className={`w-full ${isStatusRing ? 'ring ring-offset-1 ring-[#4F8BED] rounded-full' : ''}`}
                />
              </div>
            </div>
          ))}
          
          <div className=' realtive flex px-3 '>
              <button className={`p-1 border-0 absolute top-4 left-5 rounded-full  hover:bg-white transition-transform  ease-linear `} onClick={handleClickPrev}>
                <FaArrowLeft />
              </button>
          
              <button className={`p-1 border-0 rounded-full absolute top-4 right-5 hover:bg-white transition-transform ease-linear `} onClick={handleClickNext}>
                <FaArrowRight />
              </button>
          
          </div>
          
        </div>
  
      );
}

export default Carousel
