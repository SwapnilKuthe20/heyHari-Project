import React from 'react'

function LanguageCard({ handleCardclick, Activecard, title, subtitle, languageicon, className }) {
    return (
        <>
            <div className={`relative rounded-lg ${className}  ${Activecard ? "ring-4 ring-inset ring-[#4F8BED] " : "none"} `} onClick={handleCardclick}>
                <div className='absolute top-1 left-2'>
                    <p className='font-poppins text-2xl font-normal '>{title}</p>
                    <p className='font-poppins font-normal text-base'>{subtitle}</p>
                </div>
                <div className='absolute right-1 bottom-1 text-[50px] font-normal opacity-30'>{languageicon}</div>
            </div>
        </>
    )
}
export default LanguageCard