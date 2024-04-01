import React from 'react'
import { NavLink } from 'react-router-dom'
import { IoChevronDownSharp } from "react-icons/io5";   



const Footer = ({footerlinks}) => {
  return (
    <div className='mt-4 ms-4'>
      <div className='footer-container font-poppins text-[#737373] font-normal text-xs'>
        <div className='mb-4'>
        <ul className='flex gap-4 '>
            {
             footerlinks.map((item, index)=>{
              return(
                <li key={index}>
                  <NavLink to={item?.path}>
                    {item?.element}
                  </NavLink>
                </li>
              )
             }) 
            }
        </ul>
        </div>
        <div className='flex gap-4 '>
        <p >English <IoChevronDownSharp className='inline-flex items-center' /></p>
        <p>© 2024 HeyHari from Leo Coders Private Limited</p>
        </div>
      </div>
    </div>
  )
}

export default Footer

