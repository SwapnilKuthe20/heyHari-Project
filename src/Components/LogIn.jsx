import React from 'react'
import { loginSideImg, loginLogo, googlePlay, appStore } from '../Assets/Images'
import { IoCaretDownSharp } from "react-icons/io5";
import { India, afganistan, Albania, Angola, Anguilla, antigua, Armenia, } from '../Assets/Images'
import OtpModal from './OtpModal';

function LogIn() {
    return (
        <>
            <div className='flex flex-wrap justify-center items-center w-full gap-16'>

                <div className=' sm:w-1/2 md:w-[40%] lg:w-[442px] '>
                    <img src={loginSideImg} alt="" />
                </div>

                <div className='sm:w-52 md:w-[40%] lg:w-[350px] '>
                    <div className='border border-[#DBDBDB] rounded-lg p-3'>
                        <div className='w-20 h-20 m-auto mt-6'>
                            <img src={loginLogo} alt="" />
                        </div>
                        <div className='flex gap-2 mt-8 w-full mb-5'>
                            <div className='relative border border-[#747474] rounded'>
                                {/* <div className='w-[14px] h-[10px] absolute top-[15px] left-2'>
                                    <img src={India} alt="" />
                                </div> */}
                                <div className='text-base  py-2 font-poppins font-normal'>
                                    <select className='focus:outline-none' >
                                        <option> +91 </option>
                                        <option> +93 </option>
                                        <option> +1-268 </option>
                                        <option> +1-264 </option>
                                        <option> +355 </option>
                                        <option> +374 </option>
                                        <option> +244 </option>
                                        <option> +54 </option>
                                        <option> +43 </option>
                                        <option> +61 </option>
                                    </select>
                                </div>
                                <div className='absolute top-[10px] right-[1px] text-[#646464]'>
                                    <button ><IoCaretDownSharp /></button>
                                </div>
                            </div>
                            <input type="tel" className='focus:outline-none border border-[#747474] p-2 rounded  md:w-3/4 w-full ' />
                        </div>
                        <button className='bg-[#D9D9D9]  w-full p-2 rounded-lg block  text-[#646464] font-poppins font-semibold'>Send OTP</button>
                    </div>

                    <div className='w-[350px] h-24 pt-6 '>
                        <h1 className='text-sm text-center font-poppins font-normal'>Get the app.</h1>
                        <div className='flex justify-center gap-2 mt-5'>
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
            <OtpModal />
        </>
    )
}

export default LogIn

