import React from 'react'
import Ellipseimg4 from '../Assets/Images/Ellipseimg4.png'
import StarRating from '../Common_Components/StarRating'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";


function ProfileRating() {
    const profilerating = [{
        id:1,
        profileimage:Ellipseimg4,
        name:"John Doe",
    }]
    const stars = 4.6

  return (
    <div>
    
    {profilerating.map((profile) => (
                <div key={profile.id} className='flex items-center gap-5 mb-4'>
                    <div className='w-[50px]'>
                        <img className='w-full' src={profile.profileimage} alt="" />
                    </div>
                    <div>
                        <p className='font-medium text-base font-poppins'>{profile.name}</p>
                        <div className='flex'>
        {[...Array(5)].map((element, index) => {
          let number = index + 0.5;
          return (
            <span key={index} >
              {stars >= index + 1 ?
                <IoMdStar className='text-[#19B500]' /> : stars >= number ? <IoMdStarHalf className='text-[#19B500]' /> : <IoMdStarOutline />
              }
            </span>
          )
        })}
        <StarRating stars={stars}/>
      </div>
                    </div>
                </div>
            ))}
    </div>
  )
}

export default ProfileRating
