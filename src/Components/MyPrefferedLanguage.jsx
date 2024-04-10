import React, { useState } from 'react'
import LanguageCard from '../Common_Components/LanguageCard'

function MyPrefferedLanguage() {
    const [Activecard, setActivecard] = useState(false)

    const handleCardclick = () => {
        setActivecard(!Activecard)
    }
    return (
        <>
            <div>
                <h2 className='font-poppins font-normal text-xl text-center mb-4'>Select preferred language</h2>
                <div className='flex gap-4 mb-4'>
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#E9ABFF] h-[100px] w-[180px] "} title={"English"} subtitle={""} languageicon={"En"} />
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#D0FFAB] h-[100px] w-[180px] "} title={"Hindi"} subtitle={"हिन्दी"} languageicon={"हि"} />
                </div>
                <div className='flex gap-4 mb-4' >
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#9494FF] h-[100px] w-[180px] "} title={"Assamese"} subtitle={"অসমীয়া"} languageicon={"অ"} />
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#FFEDAB] h-[100px] w-[180px] "} title={"Marathi"} subtitle={"मराठी"} languageicon={"म"} />
                </div>
                <div className='flex gap-4 mb-4'>
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#ABFFBE] h-[100px] w-[180px] "} title={"Bengali"} subtitle={"বাংলা"} languageicon={"বা"} />
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#ABEBFF] h-[100px] w-[180px] "} title={"Gujrati"} subtitle={"ગુજરાતી"} languageicon={"ગ"} />
                </div>
                <div className='flex gap-4 mb-4'>
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#ADABFF] h-[100px] w-[180px] "} title={"Kanada"} subtitle={"ಕನ್ನಡ"} languageicon={"ಕ"} />
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#D0ABFF] h-[100px] w-[180px] "} title={"Malayalam"} subtitle={"മലയാളം"} languageicon={"മ"} />
                </div>
                <div className='flex gap-4 mb-4'>
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#FFABC9] h-[100px] w-[180px] "} title={"Tamil"} subtitle={"தமிழ்"} languageicon={"த"} />
                    <LanguageCard handleCardclick={handleCardclick} Activecard={Activecard} className={"bg-[#FFABAB] h-[100px] w-[180px] "} title={"Telugu"} subtitle={"తెలుగు"} languageicon={"తె"} />
                </div>
            </div>
        </>
    )
}

export default MyPrefferedLanguage