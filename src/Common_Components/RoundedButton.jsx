import React from 'react'

function RoundedButton({tittle,color,btn,handleClick}) {

    return (
        <>
            <button className= {`${btn ?"" : ""} bg-[#EBF2FF] font-normal text-base py-2 px-16 rounded-2xl`} onClick={handleClick}>
                {tittle}
            </button>
        </>
    )
}

export default RoundedButton
