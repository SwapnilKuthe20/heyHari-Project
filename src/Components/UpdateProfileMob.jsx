import React, { useState } from 'react'
import { profileSideImg, profileImg, camera } from '../Assets/Images';
import RoundedImage from '../Common_Components/RoundedImage';
import Textfield from '../Common_Components/Textfield';
import RoundedButton from '../Common_Components/RoundedButton'

function UpdateProfileMob() {
    const imageUrls = [{ src: profileImg },]

    const [addNo, setAddNo] = useState({
        phoneNo: '',
        otp: ''
    })
    const [disable, setDisable] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target
        setAddNo({
            ...addNo,
            [name]: value
        })
    }

    const handleAdditionalNo = () => {

        
    }
    const handleOTP = () => {
       
    }
    

    return (
        <>
            <div className=''>
                <div style={{ backgroundImage: `url(${profileSideImg})` }} className={`w-[681px] h-[250px] bg-cover flex justify-center items-center`} >
                    <div className='w-[100px] relative'>
                        <RoundedImage imageUrls={imageUrls} alt={"rounded_image"} width={"100px"} />
                        <a href="" className='absolute right-0 bottom-0' > <img className='w-[30px] ' src={camera} alt="" /> </a>
                    </div>
                </div>

                <div className='font-poppins m-auto w-[475px] ' >
                    <h1 className='font-normal text-base mt-5'>Additional Number</h1>

                    <form  action="" className='w-full '>
                        <div className='mt-5'>
                            <label htmlFor="phoneNo" className='text-sm font-normal text-[#646464] '>Phone Number*</label>
                            <div className='flex items-center gap-3 '>
                                <Textfield id='phoneNo' name="phoneNo" className={'w-96'} placeholder={"+91 9876543210"} type={"tel"} value={addNo.phoneNo} onChange={handleChange} />
                                <RoundedButton tittle={"Send OTP"} disabled={true} color={"#EBF2FF"} onClick={handleAdditionalNo} className={'w-[77px] p-2 text-xs  bg-[#4F8BED] text-white rounded-lg '} />
                            </div>
                        </div>

                        <div className='mt-4'>
                            <label htmlFor="otp" className='text-sm font-normal text-[#646464]'>OTP</label>
                            <div className='flex gap-3 items-center'>
                                <Textfield id='otp' name="otp" className={'w-96'} placeholder={"123456"} type={"tel"} value={addNo.otp} onChange={handleChange} />
                                <RoundedButton
                                    tittle={"Verify"} color={'red'} onClick={handleOTP}
                                    disabled={disable}
                                className={`w-[77px] p-2 text-xs ${addNo.otp =='' ?'bg-[#646464]' : 'bg-[#4F8BED]'}  bg-[#4F8BED] text-white rounded-lg `} />
                            </div>
                        </div>
                    </form>
                    <div className=' relative'>
                        <div className='flex gap-2 absolute right-24 top-2 '>   
                            <a href="" className='underline'>Resend OTP</a>
                            <p>0:00</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateProfileMob
