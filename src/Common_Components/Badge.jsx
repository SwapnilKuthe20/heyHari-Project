import React from 'react'

function Badge({value,className}) {
  return (
    <div>
      <div>
      <span className={`absolute bg-red-600 text-white w-4 text-center text-[10px] rounded-full ${className}`} style={{ display: value ? 'block' : 'none' }}>
            {value}
          </span>
      </div>
    </div>
  )
}

export default Badge
