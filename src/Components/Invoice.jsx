import React, { useState } from 'react'
import { invoiceImg } from '../Assets/Images'
import { downloadInvoiceLogo } from '../Assets/Icons/ProfileLogo'
import { RxCross1 } from "react-icons/rx";

function Invoice({ visible, onClose }) {
    const [ShowModal, setShowModal] = useState(false)

    const handlePopUp = () => {
        setShowModal(false)
    }

    if (!visible) return null

    return (
        <>
            <div className='w-full flex justify-center items-center fixed inset-0 rounded bg-black bg-opacity-60 '>
                <div className=' p-5 rounded relative w-[426px]'>
                    <div className='height-[100vh] flex flex-col justify-center items-center relative'>
                        <button onClick={onClose} className='absolute top-[-33px] right-0 text-white text-2xl '> <RxCross1 /> </button>
                        <img src={invoiceImg} alt="" width='398' height='472' />
                        <button className='flex py-[18px] px-36 bg-[#EBF2FF] mt-3 rounded'>
                            <img src={downloadInvoiceLogo} alt="" width='24' height='24' />
                            Download invoice
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Invoice