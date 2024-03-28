import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoImage } from '../Assets/Images';

function Sidebar({ NavLinks }) {

  return (
    <>
      <nav className='w-[235px]  h-full px-10 pt-2.5 border border-r-1 relative'>
        <div className=''>

          <div className='w-[155px] h-[60px] flex'>
            <NavLink to="/">
              <img src={logoImage} alt="" className='w-100' /> 
            </NavLink>
          </div>
          <ul className='pt-10'>
            {
              NavLinks?.map((item, index) => {
                return (
                  <li key={index}>
                    <NavLink to={item?.path} className='sidebar-lable pb-5'>
                      <img src={item?.icon} alt="" className='sidebar-logo ' width={26} height={26} />
                      {item?.element}
                    </NavLink>
                  </li>
                )
              })
            }
          </ul>

        </div>
      </nav>
    </>
  )
}

export default Sidebar
