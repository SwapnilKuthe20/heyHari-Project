import React, { useState } from 'react'
import Textfield from '../Common_Components/Textfield'
import SquareButtons from '../Common_Components/SquareButtons'
import { MdOutlineDelete } from "react-icons/md";

function ManageCertifications() {
    const [componyInput, setComponyInput] = useState({
        componyName: '',
        componyEmail: '',
    })

    const handleChange = (e) => {
        // console.log(e.target.value);
    }
    const handleClick = () => {

    }
    const handleApproval = () => {

    }

    return (
        <>
            <div className='w-full px-10 py-5 font-poppins'>
                <div className='w-full border rounded-lg border-[#A5A5A5] py-3'>
                    <h1 className='font-bold text-[#8D8D8D]  font text-xl ms-8 mb-[18px]'>Upload Authorize Certificate if any? </h1>
                    <div className='w-80 mx-auto border-dashed border border-[#1141C8] rounded-lg py-3 px-2 text-center'>
                        <div className=''>
                            <Textfield name={"componyName"} style={'font-normal text-xs ps-2 py-[10px] w-full '} placeholder={"Company Name"} type={"text"} value={componyInput.componyName} handleChange={handleChange} />
                        </div>
                        <div className='my-2'>
                            <Textfield name={"componyEmail"} style={'font-normal text-xs ps-2 py-[10px] w-full'} placeholder={"Company Email"} type={"email"} value={componyInput.componyEmail} handleChange={handleChange} />
                        </div>
                        <SquareButtons type="submit" style={'bg-[#EBF2FF] font-normal text-base px-4'} onClick={handleClick} title="Browse & Upload Certificate" />
                    </div>

                    <p className=' text-center text-[10px] mb-3 mt-2'> Maximum of ten documents can be uploaded.</p>
                </div>

                <h1 className='certificationHeading'>Under Review</h1>
                <div className='w-full h-[135px] custom-scrollbar overflow-auto border border-[#D9D9D9] rounded-lg py-2 ps-3 pe-7 '>
                    <ul className=''>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                    </ul>
                </div>
                <h1 className='certificationHeading'>Approved</h1>
                <div className='w-full h-[135px] custom-scrollbar overflow-auto border border-[#D9D9D9] rounded-lg py-2 ps-3 pe-7 '>
                    <ul className=''>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                        <li className='flex justify-between  px-2 py-[10px] mb-1 border border-[#32416B] rounded-lg'>
                            <p className='font-poppins font-normal text-xs'> doc02 XYZ Company xyz@example.com.pdf</p>
                            <div className='text-[#FF7272]'><MdOutlineDelete /></div>
                        </li>
                    </ul>
                </div>
                <button onClick={handleApproval} className='bg-[#4F8BED] text-white text-center block m-auto py-2 rounded-[20px] mt-5 w-1/2' >Send for approval</button>
            </div>
        </>
    )
}
export default ManageCertifications