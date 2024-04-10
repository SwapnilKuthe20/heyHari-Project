import React, { useState } from 'react'

function OtpModal({ visible, onClose }) {
  const [otp, setOTP] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOTP = (e) => {
    setOTP(e.target.value)
  }
  const handleOtpSubmitt = (e) => {
    e.preventDefault();

    const otpIsValid = (otp) => {
      return (
        /^\d{6}$/.test(otp)
      )
    };

    if (otpIsValid(otp)) {
      alert("Otp is Valid");
      setOTP("")
    } else {
      setErrorMessage("Pls enter valid otp")
      alert(errorMessage);
    }

  }

  if (!visible) return null

  return (
    <>
      <div className='w-full flex justify-center items-center fixed inset-0 rounded bg-black bg-opacity-30 backdrop-blur-sm'>

        <div className='bg-white p-5 rounded relative w-[426px]'>

          <button onClick={onClose} className='absolute top-4 right-3 w-6 font-bold' >X</button>

          <h1 className='font-poppins text-2xl font-normal mt-10'>Enter six digit code sent on registered number.</h1>
          <p className='text-[#4F8BED] mt-5' >Your phone number will be your unique identity on HeyHari.</p>

          <form onSubmit={handleOtpSubmitt} className=' flex flex-col justify-center mt-5'>
            <input onChange={handleOTP} type="number" value={otp} placeholder='Enter code ' className='placeholder:text-[#646464] placeholder:text-base w-72 m-auto p-3 border-[1px] border-black rounded focus:outline-none ' />
            <input type='submit' value="Login" className='text-white bg-[#0095F6] rounded-lg w-72 m-auto py-2 my-5' />
          </form>
          <div className='text-sm font-normal text-end mr-14'>
            <span className='mr-3 '><a href="#">Resend OTP</a></span>
            <span>0:30</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default OtpModal