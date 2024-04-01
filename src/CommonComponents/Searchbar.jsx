import React from 'react'
import { searchIcon } from '../assets/icons'

const Searchbar = ({ className, placeholder, handleSearch,value }) => {
  
  return (
    <div className='mt-4 ms-4'>
      <div className='w-1/3 rounded-lg bg-[#EBF2FF] h-8 p-4 flex items-center border ' >
        <input type="text" placeholder={placeholder} value={value} onChange={handleSearch} className={`w-full border-0 bg-transparent text-sm focus:outline-none font-poppins  ${className} `} />
        <img src={searchIcon}  alt="searchIcon" className='w-6' />
      </div>
    </div>
  )
}

export default Searchbar
