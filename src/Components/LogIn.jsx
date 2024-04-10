import React, { useState } from 'react'
import { loginSideImg, loginLogo, googlePlay, appStore } from '../Assets/Images'
import { IoCaretDownSharp } from "react-icons/io5";
import { India, afganistan, Albania, Angola, Anguilla, antigua, Armenia, } from '../Assets/Images'
import OtpModal from './OtpModal';

const countries = [
    { id: 1, name: "India", code: "IN", phone: 91, flag: India },
    { id: 2, name: "Afghanistan", code: "AF", phone: 93, flag: afganistan },
    { id: 3, name: "Antigua and Barbuda", code: "AB", phone: 1 - 268, flag: antigua },
    { id: 4, name: "Anguilla", code: "AN", phone: 1 - 264, flag: Anguilla },
    { id: 5, name: "Albania", code: "AL", phone: 355, flag: Albania },
    { id: 6, name: "Armenia", code: "AR", phone: 374, flag: Armenia },
    { id: 7, name: "Angola", code: "AR", phone: 244, flag: Angola },
];


function LogIn() {

    const [isOpen, setIsOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState({ name: "India", code: "IN", phone: 91, flag: India });
    const [ShowModal, setShowModal] = useState(false)

    const selectOption = (country) => {
        setSelectedCountry(country);
        setIsOpen(false);
    };

    const searchCountry = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const HandleModalClose = () => {
        setShowModal(false)
    }
    

    return (
        <>
            <div >

                <div className='flex flex-wrap w-[85%] m-auto mt-10 justify-center items-center  gap-16'>

                    <div className='w-[442px] '>
                        <img className='w-full' src={loginSideImg} alt="" />
                    </div>

                    <div className='w-[80%] md:w-[350px] '>
                        <div className='border border-[#DBDBDB] rounded-lg p-3'>
                            <div className='w-20 m-auto mt-6'>
                                <img src={loginLogo} alt="" />
                            </div>

                            <div className="flex gap-2 w-full mx-auto mt-8 text-base font-poppins font-normal">
                                <div className="w-[60%] relative border border-[#747474] rounded  ">
                                    <div className="flex gap-2 items-center py-2 ms-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                                        <img src={selectedCountry.flag} alt=".." width="14px" height="10px" />
                                        <p>{`+${selectedCountry.phone}`}</p>
                                    </div>
                                    <div className='absolute top-3 right-0 pe-1 text-[#646464]'>
                                        <button className='focus:outline-none' ><IoCaretDownSharp /></button>
                                    </div>
                                </div>
                                <input type="tel" className='focus:outline-none border border-[#747474] p-2 rounded w-full ' />

                            </div>
                            <div className=''>
                                {isOpen && (
                                    <div className=" w-[22%] rounded-md border absolute ">
                                        <input type="text" className="w-full rounded-t-md p-4 focus:outline-none" value={searchQuery} placeholder="Search " onChange={searchCountry} />
                                        <ul className=" bg-white h-[200px] overflow-y-auto max-h-96 overflow-visible">
                                            {countries
                                                .filter(country => country.name.toLowerCase().includes(searchQuery))
                                                .map(country => (
                                                    <li key={country.id} className="flex justify-between items-center px-4 py-3 cursor-pointer " onClick={() => selectOption(country)}>
                                                        <span> {country.name} </span>
                                                        <div className="flex items-center">
                                                            <img src={country.flag} width="14px" height="10px" alt="" />
                                                            <p className='text-base'>{`+${country.phone}`}</p>
                                                        </div>
                                                    </li>
                                                ))}
                                        </ul>
                                    </div>
                                )}
                            </div>
                            <button onClick={() => setShowModal(true)}
                                className={`w-full mt-5 p-2 rounded-lg block  text-[#646464] font-poppins font-semibold ${searchQuery !=='' ? 'bg-[#43acec]' : 'bg-[#D9D9D9]'}`} >
                                Send OTP
                            </button>
                        </div>
                        <OtpModal visible={ShowModal} onClose={HandleModalClose} />

                        <div className='w-[80%] md:w-[350px] m-auto h-24 pt-6 '>
                            <h1 className='text-sm text-center font-poppins font-normal'>Get the app.</h1>
                            <div className='flex justify-center gap-2 mt-5 '>
                                <div className='w-[134px] h-10'>
                                    <img src={googlePlay} alt="" />
                                </div>
                                <div className='w-[113px] h-10'>
                                    <img src={appStore} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div>
        </>
    )
}
export default LogIn