import React, { useState } from 'react'
import { IoMdStar, IoMdStarHalf,IoMdStarOutline } from "react-icons/io";


function StarRating({stars}) {

  return (
    <div>
      <div className='text-[#19B500] flex text-center text-[10px]'>{stars}
      </div>
    </div>
  )
}

export default StarRating
