import React, { useState } from 'react'
import { profileSideImg, profileImg, camera } from '../Assets/Images'
import RoundedImage from '../Common_Components/RoundedImage'
import Textfield from '../Common_Components/Textfield'
import TextAreaField from '../Common_Components/TextAreaField'
import { NavLink } from 'react-router-dom';

function MyProfile() {

    const imageUrls = [{ src: profileImg },]
    const [] = useState({

    })

    const handleChange = (e) => {

    }
    const handleProfileForm = () => {

    }
    const handleTextArea = () => {

    }

    return (
        <>
            <div className='h-[694px]' >
                <div style={{ backgroundImage: `url(${profileSideImg})` }} className={`w-[681px] h-[250px] bg-cover flex justify-center items-center`} >
                    <div className='w-[100px] relative'>
                        <RoundedImage imageUrls={imageUrls} alt={"rounded_image"} width={"100px"} />
                        <a href="" className='absolute right-0 bottom-0' > <img className='w-[30px] ' src={camera} alt="" /> </a>
                    </div>
                </div>

                <div className='h-[450px] overflow-x-auto focus:scroll-auto custom-scrollbar'>
                    <form onSubmit={handleProfileForm} action="" className='font-poppins font-normal w-[386px]   mt-5 m-auto focus:outline-none'>
                        <div>
                            <label htmlFor="gstNo" className='text-base '>GST Number</label>
                            <Textfield id="gst" name={"name"} placeholder={"1234567890"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3 '} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="gstType" className='text-base '>GST Type</label>
                            <Textfield id="gstType" name={"name"} placeholder={"Regular"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="legalName" className='text-base '>Legal Name</label>
                            <Textfield id="legalName" name={"name"} placeholder={"Winston C"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="tradeNo" className='text-base '>Trade Name</label>
                            <Textfield id="tradeNo" name={"name"} placeholder={"ABC Comapny Pvt Ltd"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="gstStatus" className='text-base '>GST Status</label>
                            <Textfield id="gstStatus" name={"name"} placeholder={"Active"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                        </div>
                        <div>
                            <label htmlFor="dateOfReg" className='text-base '>Date of Registration</label>
                            <Textfield id="dateOfReg" name={"name"} placeholder={"12/3/2019"} type={"date"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3 placeholder-gray-500'} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="ConstiOfBussi" className='text-base '>Constitution of Bussiness</label>
                            <Textfield id="ConstiOfBussi" name={"name"} placeholder={"Information & Technology"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="principleAdd" className='text-base '>Principle Address</label>
                            <TextAreaField id="principleAdd" name="name" placeholder={"Enter Message....."} width={"full"} height={"100px"} value={''} handleTextArea={handleTextArea} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="additionalAdd" className='text-base '>Additional Address</label>
                            <TextAreaField id='additionalAdd' name="name" placeholder={"Enter Message....."} width={"full"} height={"100px"} value={''} handleTextArea={handleTextArea} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="adharCard" className='text-base '>Adhar Card</label>
                            <Textfield id="adharCard" name={"name"} placeholder={"1234567890"} type={"text"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="mobNo" className='text-base '>Mobile Number</label>
                            <div className='relative'>
                                <Textfield id="mobNo" name={"name"} placeholder={"+91 9988777676"} type={"tele"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                                <NavLink>
                                    <p className='absolute right-4 top-3 text-[#4F8BED]'>Update</p>
                                </NavLink>
                            </div>
                        </div>
                        <div className='mt-4'>
                            <label htmlFor="additionalNo" className='text-base '>Additional Number</label>
                            <div className='relative'>
                                <Textfield id="additionalNo" name={"name"} placeholder={"+91 9988777676"} type={"tel"} value={''} handleChange={handleChange} className={'w-full ps-2 pt-3'} />
                                <NavLink>
                                    <p className='absolute right-4 top-3 text-[#4F8BED]'>Add</p>
                                </NavLink>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
export default MyProfile