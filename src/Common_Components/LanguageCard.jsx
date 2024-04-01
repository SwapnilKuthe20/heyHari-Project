import React from 'react'

function LanguageCard({ handleCardclick, Activecard, languagecardData }) {
    return (
        <div className='mt-4 ms-4'>
            {languagecardData?.map((item, index) => {
                const {backgroundColor, text, subtext, languageicon } = item
                return (
                    <div key={index} className={` h-[100px] w-[180px] relative rounded-lg border bg-${backgroundColor}  ${Activecard ? "ring-4 ring-inset ring-[#4F8BED] " : "none"} `} onClick={handleCardclick}>
                        <div className='absolute top-1 left-2'>
                            <p className='font-poppins text-2xl font-normal '>{text}</p>
                            <p>{subtext}</p>
                        </div>
                        <div className='absolute right-1 bottom-1 text-[50px] font-normal opacity-30'>{languageicon}</div>
                    </div>
                )
            })

            }
        </div>
    )
}

export default LanguageCard
