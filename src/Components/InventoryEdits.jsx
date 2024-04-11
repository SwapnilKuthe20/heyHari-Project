import React, { useState } from 'react'
import Textfield from '../Common_Components/Textfield'
import RoundedButton from '../Common_Components/RoundedButton'
import Inventoryimg from '../Assets/Images/Inventoryimg.png'
import TextAreaField from '../Common_Components/TextAreaField'
import check from '../Assets/Icons/check-circle.svg'

const InventoryEdits = () => {

    const [deductproduct, setDeductproduct] = useState(false)
    const [updateinventory, setUpdateinventory] = useState(false)
    const [cancel, setCancel] = useState(false)
    const [showPopup, setShowPopup] = useState(false);
    const [showToaster, setShowToaster] = useState(false);



    const handleClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        console.log("Closing popup");
        setShowPopup(false);
    };

    const [textArea, setTextArea] = useState({
        name: '',
    })

    const handleTextArea = (e) => {
        setTextArea({
            ...textArea,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }
    const deducthandleClick = () => {
        console.log("Deduct button is clicked")
        setDeductproduct(true);
    }
    const closedeductClick = () => {
        setDeductproduct(false)
    }
    const updatehandleClick = () => {
        setShowToaster(true);
        setTimeout(() => {
            setShowToaster(false);
        }, 2000);
    };
    const cancleClick = () => {
        alert("cancel button clicked")
        setCancel(!cancel)
    }
    const [file, setFile] = useState({
        name: '',
    })

    const handleChange = () => {
        setFile(
            alert("button disable")
        )
    }
    return (
        <div className='flex gap-5 p-5  '>
            <div className=' ps-7'>
                <div className='flex justify-between  items-center m-1 '>
                    <p className='text-[#646464] font-poppins font-medium text-base'>Item Code</p>
                    <div className='flex justify-between items-center border border-[#A5A5A5] rounded  w-[300px]  p-4 h-10'>
                        <Textfield name={"name"} placeholder={"123456"} className={'focus:outline-none font-poppins'} disabled={true} />
                        <RoundedButton title={"Check"} color={"#646464"} type={"number"} disabled={true} className={" bg-[#646464] p-1 px-3 rounded-lg font-poppins font-medium text-xs text-white "} handleClick={handleClick} />
                    </div>
                </div>
                <div className='flex justify-between   items-center m-1 '>
                    <p className='text-[#646464] font-poppins font-medium text-base'>Brand</p>
                    <Textfield placeholder={"Brand Name"} disabled={true} type={"text"} className={"font-poppins border border-[#A5A5A5] rounded p-2 focus:outline-none w-[300px]  "} />
                </div>
                <div className='flex justify-between gap-5  m-1 '>
                    <p className=' font-poppins font-medium text-base'>Description</p>
                    <TextAreaField name={"name"} placeholder={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."} width={"300px"} height={"100px"} value={textArea.name} handleTextArea={handleTextArea} className={"font-poppins font-normal text-base"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1 '>
                    <p className=' font-poppins font-medium text-base'>MRP</p>
                    <Textfield placeholder={"₹8,599"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1 '>
                    <p className=' font-poppins font-medium text-base'>Offer price</p>
                    <Textfield placeholder={"₹5,599"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1'>
                    <p className='text-[#646464] font-poppins font-medium text-base'>Discount %</p>
                    <Textfield placeholder={"23%"} disabled={true} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1 '>
                    <p className=' font-poppins font-medium text-base'>GST</p>
                    <Textfield placeholder={"7%"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1'>
                    <p className=' font-poppins font-medium text-base'>HSN code</p>
                    <Textfield placeholder={"123456"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1'>
                    <p className=' font-poppins font-medium text-base'>MOQ</p>
                    <Textfield placeholder={"50"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                <div className='flex justify-between gap-5 items-center m-1'>
                    <p className='text-[#646464] font-poppins font-medium text-base'>Quantity</p>
                    <Textfield placeholder={"500"} disabled={true} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[300px]"} />
                </div>
                {/* ***************************add product popup********************* */}

                <div className=' flex gap-4 justify-end '>
                    <RoundedButton title={"Add product"} type={"submit"} className={"bg-[#4F8BED] text-white px-4 p-2 rounded-lg"} handleClick={handleClick} />
                    {showPopup && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-4 rounded-lg ">
                                <div className='text-center'>
                                    <h3 className='font-poppins font-medium text-base mb-4 '>Add Inventory</h3>
                                    <div className='flex justify-between gap-5 items-center m-1 mb-4'>
                                        <p className='text-[#646464] font-poppins font-medium text-base'>Current Quantity</p>
                                        <Textfield placeholder={"100"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[250px]"} />
                                    </div>
                                    <div className='flex justify-between gap-5 items-center m-1 mb-4'>
                                        <p className=' font-poppins font-medium text-base'>Add Quantity</p>
                                        <Textfield placeholder={"200"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[250px]"} />
                                    </div>
                                    <div className='flex justify-between gap-5 items-center m-1'>
                                        <p className=' font-poppins font-medium text-base'>Updated Quantity</p>
                                        <Textfield placeholder={"300"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[250px]"} />
                                    </div>
                                </div>
                                <div className=' flex gap-5 justify-end me-1 mt-5'>
                                    <RoundedButton title={"Cancel"} type={"submit"} handleClick={handleClosePopup} className={"text-[#646464] font-medium text-base "} />
                                    <RoundedButton title={"Update Inventory"} type={"submit"} className={"bg-[#4F8BED] rounded-lg px-3 p-2 text-white font-medium text-base"} />
                                </div>

                            </div>
                        </div>
                    )}
                    {/* ***************************add product popup********************* */}
                    {/* **************************deduct product popup ******************* */}
                    <RoundedButton title={"Deduct product"} type={"submit"} className={"bg-[#4F8BED] text-white px-3 p-2 me-1 rounded-lg"} handleClick={deducthandleClick} />
                    {deductproduct && (
                        <div className="fixed top-0 left-0 w-full h-full bg-gray-600 bg-opacity-50 flex justify-center items-center">
                            <div className="bg-white p-4 rounded-lg ">
                                <div className='text-center'>
                                    <h3 className='font-poppins font-medium text-base mb-4 '>Deduct Inventory </h3>
                                    <div className='flex justify-between gap-5 items-center m-1 mb-4'>
                                        <p className='text-[#646464] font-poppins font-medium text-base'>Current Quantity</p>
                                        <Textfield placeholder={"100"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[250px]"} />
                                    </div>
                                    <div className='flex justify-between gap-5 items-center m-1 mb-4'>
                                        <p className=' font-poppins font-medium text-base'>Deduct Quantity</p>
                                        <Textfield placeholder={"50"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[250px]"} />
                                    </div>
                                    <div className='flex justify-between gap-5 items-center m-1'>
                                        <p className=' font-poppins font-medium text-base'>Updated Quantity</p>
                                        <Textfield placeholder={"50"} type={"text"} className={"font-poppins rounded p-2 border border-[#A5A5A5] w-[250px]"} />
                                    </div>

                                </div>
                                <div className='flex justify-end gap-5 me-1  mt-5'>
                                    <RoundedButton title={"Cancel"} type={"button"} handleClick={closedeductClick} className={"text-[#646464] font-medium text-base "} />
                                    <RoundedButton title={"Update Inventory"} type={"submit"} className={"bg-[#4F8BED] rounded-lg px-3 p-2 text-white font-medium text-base"} />
                                </div>
                            </div>
                        </div>
                    )}
                    {/* **************************deduct product popup ******************* */}
                </div>

            </div>
            <div className='text-center'>
                <div className='w-[260px]'>
                    <img src={Inventoryimg} alt="Inventoryimg" className='w-full' />
                </div>
                {/* **************************upadate inventory toaster  ******************* */}
                <div className='mt-16 text-center  '>
                    <RoundedButton title={"Update inventory"} type={"submit"} className={"bg-[#4F8BED] text-white px-3 rounded-lg block ms-12 "} handleClick={updatehandleClick} />

                    {showToaster && (
                        <div>
                            <div className='fixed inset-0 bg-gray-600 bg-opacity-50 z-40'></div>
                            <div className='fixed bottom-20 right-0 z-50 w-[300px]'>
                                <div className="bg-[#EBF2FF] text-left p-3 shadow-lg flex ">
                                    <span className="mr-2"><img src={check} alt="check" /></span>
                                    <p className='font-poppins font-normal text-base text-black max-w-[195px]'>You have successfully updated your inventory.</p>
                                </div>
                            </div>
                        </div>
                    )}
                    {/* **************************upadate inventory toaster  ******************* */}
                    <RoundedButton title={"Cancel"} type={"submit"} className={"text-[#646464] mt-5 "} handleClick={cancleClick} />
                </div>
            </div>
        </div>
    )
}

export default InventoryEdits
