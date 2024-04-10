import React, { useState } from 'react'
import { AddMoneyImg, visa, upi, googlePay, masterCard } from '../Assets/Images'
import Textfield from '../Common_Components/Textfield'
import SquareButtons from '../Common_Components/SquareButtons'

function AddMoneyMyWallet() {
    const [AddMoney, setAddMoney] = useState()
    const [gst, setGst] = useState()
    console.log(AddMoney, 'qqqqqqqq');

    const handleChange = (e) => {
        setAddMoney(
            e.target.name = e.target.value
        )
    }

    const handle1000 = () => {
        setAddMoney(1000)
    }
    const handle2000 = () => {
        setAddMoney(2000)
    }
    const handle5000 = () => {
        setAddMoney(5000)
    }
    const handle10000 = () => {
        setAddMoney(10000)
    }
    const handleGst = (AddMoney) => {
        setGst(AddMoney + (AddMoney * 0.18))
    }
    console.log(gst, "gst");
    return (
        <>
            <div className='w-[680px] font-poppins border'>
                <p className='font-normal text-base py-5 px-10'>Upgrade your experience now for seamless transactions and effortless post uploads to enhance your shop.</p>
                <div className='w-[600px] p-3.5'>
                    <div className='w-96 my-5 border border-[#A5A5A5] px-3.5 py-5 rounded-lg'>
                        <div className='flex justify-between mb-1.5'>
                            <p className='font-normal text-base'>Add money to Wallet</p>
                            <p className='font-medium text-base text-[#19B500]'>₹10,143.00</p>
                        </div>
                        <Textfield name="AddMoney" className={'border border-[#9F9F9F] '} placeholder={"₹10,000"} type={"text"} value={AddMoney} handleChange={handleChange} />
                        <p className='m-1 font-normal text-xs' >Please enter amount in multiples of 1000 only.</p>
                        <div className='flex gap-5 mt-5 mb-10'>
                            <SquareButtons onClick={handle1000} title="₹1000+" className={'py-1 border border-black bg-white px-1.5'} />
                            <SquareButtons onClick={handle2000} title="₹2000+" className={'py-1 border border-black bg-white px-1.5'} />
                            <SquareButtons onClick={handle5000} title="₹5000+" className={'py-1 border border-black bg-white px-1.5'} />
                            <SquareButtons onClick={handle10000} title="₹10000+" className={'py-1 border border-black bg-white px-1.5'} />
                        </div>
                        <Textfield name="gst" className={'border border-[#9F9F9F]'} placeholder={"₹10,000"} type={"text"} value={gst} handleChange={handleGst} />
                        <p className='font-normal text-xs mt-1'>Including GST Tax (18%)</p>
                    </div>
                    <img src={AddMoneyImg} alt="" width='398' height='221' />
                </div>
            </div>
        </>
    )
}
export default AddMoneyMyWallet