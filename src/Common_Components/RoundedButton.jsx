import React from 'react'

function RoundedButton({ title, className, disabled, type, handleClick }) {

    return (
        <button type={type} className={` ${className} `} onClick={handleClick} disabled={disabled} >
            {title}
        </button>
    )
}

export default RoundedButton
