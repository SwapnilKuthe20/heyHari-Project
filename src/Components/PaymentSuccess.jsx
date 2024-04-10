import React from 'react'
import { SuccessPayment, viewInvoice } from '../Assets/Images'
import { RiArrowRightSLine } from "react-icons/ri";

function PaymentSuccess() {
    const SuccessData = [
        { id: 1, label: 'Transaction ID', status: 'IN22356439425749' },
        { id: 2, label: 'Total Amount', status: '₹10,000.00' },
        { id: 3, label: 'GST', status: '₹1,180.00' },
        { id: 4, label: 'Payment Time', status: '25-11-2023, 13:22:16' },
        { id: 5, label: 'Payment Method', status: 'Debit Card' },
        { id: 6, label: 'Wallet Balance', status: '₹11,950.00' },
        { id: 7, label: 'Inclusive of GST', status: null },
    ]

    const handleViewInvoice = () => {

    }

    return (
        <>
            <div className='w-full font-poppins'>
                <div className='w-[345px] border border-[#A5A5A5] rounded-3xl pb'>
                    <div className='w-full text-center py-5 px-6'>
                        <img src={SuccessPayment} alt="" width='56' height='56' className='m-auto mb-4' />
                        <p className='text-base font-normal'>Payment Success!</p>
                        <h1 className='text-2xl font-semibold'>₹11,800.00</h1>
                    </div>
                    <div className='w-full py-5 px-6'>
                        {
                            SuccessData.map((data) => {
                                const { id, label, status } = data;
                                return (
                                    < div key={id} className='flex justify-between mt-4 font-medium' >
                                        <p className='text-[#707070]'>{label}</p>
                                        <p className='text-black text-sm '>{status}</p>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='w-[430px] text-center'>
                    <h1 className='font-medium text-base mb-4'>Congratulations!</h1>
                    <p className='mb-4'>Your wallet has been successfully recharged, ensuring you have the funds you need for all your transactions.</p>
                    <button onClick={handleViewInvoice} className='w-full flex justify-between items-center py-4 px-[22px] bg-[#EBF2FF]'>
                        <div className='flex text-base font-normal'>
                            <img src={viewInvoice} alt="" width='24' height='24' />
                            View invoice
                        </div>
                        <RiArrowRightSLine />
                    </button>
                </div>
            </div >
        </>
    )
}

export default PaymentSuccess
