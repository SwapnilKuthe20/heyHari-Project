import React, { useState } from 'react'
import { myWallet } from '../Assets/Icons/ProfileLogo'
import { RiArrowRightSLine } from "react-icons/ri";
import Invoice from './Invoice';

function MyWallet({ walletData }) {
    const [ShowModal, setShowModal] = useState(false)

        const handlePopUp=()=>{
            setShowModal(false)
        }

    return (
        <>
            <div className='w-[682px] font-poppins '>
                <div className='py-5'>
                    <div className='flex justify-between mx-10'>
                        <h1 className='font-medium text-base '>Total Wallet Balance</h1>
                        <img src={myWallet} alt="" width='24' height='24' />
                    </div>
                    <div className='flex justify-between mx-10 mt-5'>
                        <h1 className='text-lg font-semibold text-[#19B500]'>₹10,143.00</h1>
                        <a href=""> <span className='flex justify-center items-center gap-2'>Add money <RiArrowRightSLine /></span></a>
                    </div>

                </div>

                <table className='bg-[#EBF2FF] w-full '>
                    <thead className='border-b-[1px] border-[#A5A5A5] '>
                        <tr className='font-poppins'>
                            <th className='font-medium text-sm text-start px-10 py-3'>Action</th>
                            <th className=' font-medium text-sm text-center'>Date</th>
                            <th className='font-medium text-sm text-center pe-10'>Amount</th>
                        </tr>
                    </thead>
                    <tbody className=''>
                        {
                            walletData?.map((rows) => {
                                const { id, img, imgDescription, date, debit, credit, viewInvoice } = rows;
                                return (
                                    < tr key={id} className='font-poppins font-normal ' >
                                        <td className='px-10 py-2'>
                                            <div className='flex text-wrap gap-2'>
                                                {debit && <img src={img} alt="" width='50' height='50' />}
                                                <p className='w-44 pt-[11px] text-xs'>{imgDescription}</p>
                                            </div>
                                        </td>
                                        <td className='text-center text-xs py-[11px]'>{date}</td>
                                        <div className='flex flex-col justify-center  pe-10 py-2'>
                                            {debit && <td className='text-xs pt-4 text-center text-[#FF3D3D]'>{debit}</td>}
                                            {credit &&
                                                (
                                                    <>
                                                        <td className='text-xs pt-4 text-center text-[#19B500]'>{credit}</td>
                                                        <td className='text-[10px] text-center underline'>
                                                            <button onClick={() => setShowModal(true)}>
                                                                {viewInvoice}
                                                            </button>
                                                        </td>
                                                    </>
                                                )
                                            }
                                        </div>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <Invoice  visible={ShowModal} onClose={handlePopUp}  />
            </div >
        </>
    )
}
export default MyWallet