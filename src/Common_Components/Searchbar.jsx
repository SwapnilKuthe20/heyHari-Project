import React from 'react'
import { searchIcon } from '../Assets/Icons/indexIcon'

const Searchbar = ({ className, placeholder, handleSearch,value }) => {
  
  return (
    <div className=''>
      <div className='rounded-lg bg-[#EBF2FF] h-8 p-4 flex items-center border ' >
        <input type="text" placeholder={placeholder} value={value} onChange={handleSearch} className={`w-full border-0 bg-transparent text-sm focus:outline-none font-poppins  ${className} `} />
        <img src={searchIcon}  alt="searchIcon" className='w-6' />
      </div>
    </div>
  )
}

export default Searchbar
