import React from 'react'

function Checkbox({checked,handleCheck}) {

    return (
        <>
            <div>
                <input type="checkbox" checked={checked} id="myCheckbox" onChange={(e)=>handleCheck(e)} className="appearance-none h-5 w-5 border border-gray-300 rounded cursor-pointer focus:outline-none transition-colors duration-300 checked:bg-black checked:border-black" />
            </div>
        </>
    )
}

export default Checkbox
