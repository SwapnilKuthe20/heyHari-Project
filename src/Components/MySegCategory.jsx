import React from 'react'
import { Battery, Lubricant, SparePart, Tyre, Tractor, Truck, Car, Bike } from '../Assets/Images/Category&Segment'
import RoundedButton from '../Common_Components/RoundedButton'

function MySegCategory() {
    const SparePartData = [
        { id: 1, label: 'Spare Parts', img: SparePart },
        { id: 2, label: 'Lubricants', img: Lubricant },
        { id: 3, label: 'Tyre', img: Tyre },
        { id: 4, label: 'Battery', img: Battery },
    ]

    const vehicalData = [
        { id: 1, label: 'Tractor', img: Tractor },
        { id: 2, label: 'Commercial Vehicle', img: Truck },
        { id: 3, label: 'Passenger Vehicle', img: Car },
        { id: 4, label: 'Two Wheeler', img: Bike },
    ]

    const handleClick = () => {

    }

    return (
        <>
            <div className='w-[680px] '>
                <div className='w-[600px] my-5 mx-10 font-poppins'>
                    <h1 className='font-normal text-xl text-center'>Customize your experience! Choose the categories that interest you the most, helping us understand your preferences and deliver information that matters to you</h1>

                    <div className='w-[600px] border border-[#A5A5A5] rounded mt-10 py-3 px-4'>
                        <div className='flex justify-between font-normal mb-[14px]'>
                            <label className='text-sm'>Please select sub category</label>
                            <button className='text-xs text-[#646464]' >Select All</button>
                        </div>

                        <ul className='flex gap-[22px] justify-center '>
                            {
                                SparePartData?.map((list) => {
                                    const { id, label, img } = list;
                                    return (
                                        <li key={id} className='relative w-full '>
                                            <img src={img} alt="" width='125' height='80' className='' />
                                            <p className='absolute bottom-3 left-6 text-nowrap text-white text-sm'>{label}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='w-[600px] border border-[#A5A5A5] rounded mt-10 py-3 px-4'>
                        <div className='flex justify-between font-normal mb-[14px]'>
                            <label className='text-sm'>Please select sub category</label>
                            <button className='text-xs text-[#646464]' >Select All</button>
                        </div>

                        <ul className='flex gap-[22px] justify-center '>
                            {
                                vehicalData?.map((list) => {
                                    const { id, label, img } = list;
                                    return (
                                        <li key={id} className='relative w-full '>
                                            <img src={img} alt="" width='125' height='80' className='' />
                                            <p className='absolute bottom-2 left-3 text-white text-sm'>{label}</p>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='w-full h-[92px] border border-[#A5A5A5] rounded my-5 px-3 py-4'>
                        <p className='font-normal text-sm'>Preferred locations</p>
                    </div>
                    <div className='w-full text-center mb-4' >
                        <RoundedButton title={"Save"} className={"bg-[#4F8BED] text-white text-base py-[10px] rounded-[20px]  px-[190px]"} handleClick={handleClick} />
                    </div>
                    <div className=' w-96 m-auto'>
                        <p className=' text-sm font-normal'>Click to select your interests and discover a feed filled with content that resonates with you.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default MySegCategory