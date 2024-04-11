import React from 'react';
import { NavLink } from 'react-router-dom';
import { logoImage } from '../Assets/Images';
import { homeIcon, dashboardIcon, inventoryIcon, createIcon, searchIcon, profileIcon, notificationIcon } from '../Assets/Icons/indexIcon';
import { customerCareImage } from '../Assets/Images'

function Sidebar() {

  const NavLivksData = [
    { path: '/home', logo: homeIcon, label: 'Home' },
    { path: '/dashboard', logo: dashboardIcon, label: 'Dashboard' },
    { path: '/create', logo: createIcon, label: 'Create' },
    { path: '/search', logo: searchIcon, label: 'Search' },
    { path: '/profile', logo: profileIcon, label: 'Profile' },
    { path: '/inventory', logo: inventoryIcon, label: 'Inventory' },
    { path: '/notification', logo: notificationIcon, label: 'Notifications' },
    { path: '/customercare', logo: customerCareImage, label: 'Customer Care' },
  ];
  
  return (
    <>
      <nav className='w-[244px] sticky top-0 right-0 border-r px-10 pt-2.5  '>
        <div className='mb-10'>
          <NavLink to="/" >
            <img src={logoImage} alt="" width="155" height="60" />
          </NavLink>
        </div>

        <ul>
          {
            NavLivksData?.map((navlinks) => {
              const { path, logo, label } = navlinks;
              return (

                <li className='mt-5' >
                  <NavLink to={path} className='flex gap-3 sidebar-lable '>
                    <img src={logo} alt="" width='24' height='24' />
                    <h3 className=''>{label}</h3>
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
