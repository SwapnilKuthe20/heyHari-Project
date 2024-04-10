import React from 'react'
import Textfield from '../Common_Components/Textfield'

function InviteBuyer() {

    const handleChange = () => {

    }
    return (
        <>
            <div className='w-[85%] py-5  border-b border-[#D9D9D9] mx-auto font-poppins '>
                <div className='w-full flex justify-between px-10 '>
                    <h1 className='text-base font-medium'>Invite Buyers</h1>
                    <div className='max-w-[470px] '>
                        <Textfield name={"name"} className placeholder={"https://heyhari.com/c/baebc423-ad1e-17a17ff8e7cd"} type={"text"} style={'w-full px-2 py-2 placeholder:text-xs '} handleChange={handleChange} />
                        <button>
                            <p>Copy</p>
                        </button>
                        <p className='font-normal text-xs text-center pt-3 leading-[18px]'>Copy the link above to help new buyers explore a world of fantastic finds, from trendy parts to unique and everything in between.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default InviteBuyer