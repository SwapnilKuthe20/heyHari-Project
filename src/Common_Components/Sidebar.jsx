import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { logoImage } from '../Assets/Images';

function Sidebar({ NavLinks }) {

  const [svgColor, setSvgColor]=useState("Black")
  return (
    <>
      <nav className='w-[235px] h-[100vh] border-r px-10 pt-2.5'>
        <div className='w-[155px] h-[60px] flex'>
          <NavLink to="/" ClassName="">
            <img src={logoImage} alt="" className='w-100' />
          </NavLink>
        </div>
        <ul className='pt-10'>
          {
            NavLinks?.map((item, index) => {
              return (
                <li key={index}>
                  <NavLink to={item?.path} className='sidebar-lable pb-5'>
                    <img src={item?.icon} alt="" width={26} height={26}   />
                    {item?.element}
                  </NavLink>
                </li>
              )
            })
          }
        </ul>
      </nav>
    </>
  )
}

export default Sidebar
