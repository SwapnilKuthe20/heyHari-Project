import React, { useState } from 'react'
import Textfield from '../../Common_Components/Textfield'
import Searchbar from '../../Common_Components/Searchbar'
import { filterIcon } from '../../Assets/Icons/indexIcon'
import InventoryTableMain from '../InventoryTableMain'
import RoundedButton from '../../Common_Components/RoundedButton'


function Inventory() {
  const [file, setFile] = useState({
    name: '',
  })

  const handleChange = () => {
    alert("button disable")
    setFile(file)
  }
  const handleClick=()=>{
    alert('Button clicked')
  }

  return (
    <>
      <div className='m-8 flex flex-col'>
        <div className='flex justify-between items-center border rounded-lg w-[700px]  p-4 h-10'>
          <Textfield name={"name"} placeholder={"Browse your file"} handleChange={handleChange} className={' border-0  rounded-lg '} />
          <RoundedButton title={"Upload"}  type={"file"}  className={" bg-[#646464] p-1 px-3 rounded-lg font-poppins font-medium text-xs text-white "} handleClick={handleClick}/>
        </div>
        <div className='flex gap-3 items-center mt-5 '>
        <div className='w-[610px]  gap-3 items-center '>
          <Searchbar placeholder={"Search"} className={"w-full border-[#A5A5A5]  "} />
        </div>
          <p className='text-base font-poppins font-normal'>Filter</p>
          <img src={filterIcon} alt="filter" className='w-6' />
        </div>  
        <InventoryTableMain/>
      </div>
    </>
  )
}

export default Inventory
