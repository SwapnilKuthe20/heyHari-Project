import React from 'react'

function RoundedButton({ tittle, onClick, Style, disabled }) {

    return (
        <>
            <button className={` ${Style}  `} onClick={onClick} disabled={disabled}>
                {tittle}
            </button>
        </>
    )
}

export default RoundedButton
