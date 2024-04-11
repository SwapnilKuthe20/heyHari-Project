import React from 'react';
import RoundedButton from '../Common_Components/RoundedButton';
import UploadImagicon from '../Assets/Images/UploadImgicon.png'
import AddProductComp from './AddProductComp';
import { Link } from 'react-router-dom';

const InventoryTable = ({ InventorytableItems }) => {
    const handleClick = () => {
        alert("Button clicked")
    }

    return (
        <div>
            <div className='w-[700px] h-[525px] border rounded-xl border-[#A5A5A5] mt-5  overflow-y-auto focus:scroll-auto custom-scrollbar '>
                <div >
                    <div className='flex justify-between  py-2.5 px-5  border-b border-[#9c7b7b]' >
                        <h1 className='text-base font-medium font-poppins'>Product</h1>
                        <h1 className='text-base font-medium font-poppins'>Quantity</h1>
                    </div>
                </div>
                {
                    InventorytableItems?.length === 0 ? (
                        <div className='relative'>
                            <AddProductComp className={"absolute top-[10rem] left-[35%] "} />
                        </div>

                    ) : (

                        InventorytableItems?.map((item, index) => {
                            const { productlabel, productimage, code, GST, HSNCode, MRP, OfferPrice, brandname, stockquantity } = item;
                            const status = stockquantity === "-" || parseInt(stockquantity) === 0 ?
                                { text: "Out of stock", color: "text-[#FF3D3D]" } : parseInt(stockquantity) >= 200 ?
                                    { text: "Available in stock", color: "text-[#19B500]" } :
                                    { text: "Limited in stock", color: "text-[#FF9900]" };

                            return (
                                <div key={index} className='flex justify-between  py-2.5 px-4 even:bg-[#E9E9E9] odd:bg-[#F5F5F5]'>
                                    <div>
                                        <div>
                                            <h4 className='font-poppins font-normal text-sm'>{productlabel}</h4>
                                            <div className='flex gap-2 items-center '>
                                                <div className='w-6 py-1'>
                                                    <img src={productimage} alt="productimage" className='w-full' />
                                                </div>
                                                <p className='font-poppins font-normal text-xs'>{code}</p>
                                            </div>
                                        </div>
                                        <div className='flex gap-14 py-1'>
                                            <p className='font-poppins font-normal text-sm text-[#646464]'>GST</p>
                                            <p className='font-poppins font-normal text-sm'>{GST}</p>
                                        </div>
                                        <div className='flex gap-3'>
                                            <p className='font-poppins font-normal text-sm text-[#646464]'>HSN Code</p>
                                            <p className='font-poppins font-normal text-sm'>{HSNCode}</p>
                                        </div>
                                    </div>
                                    <div className='text-center'>
                                        <h3 className='font-poppins font-medium text-xs'>{brandname}</h3>
                                        <div className='flex gap-14 mt-11'>
                                            <p className='font-poppins font-normal text-sm text-[#646464]'>MRP</p>
                                            <p className='font-poppins font-normal text-sm'>{MRP}</p>
                                        </div>
                                        <div className='flex gap-3 mt-2'>
                                            <p className='font-poppins font-normal text-sm text-[#646464]'>Offer Price</p>
                                            <p className='font-poppins font-normal text-sm'>{OfferPrice}</p>
                                        </div>
                                    </div>
                                    <div className='text-center' >
                                        <div>
                                            <p className={`text-[10px] font-poppins font-normal ${status.color}`}>{status.text}</p>
                                            <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                                                <h4 className='text-base font-poppins font-normal text-[#646464]'>{stockquantity}</h4>
                                            </div>
                                        </div>
                                        <div className='flex gap-5 mt-2'>
                                            <p className='font-poppins font-normal text-sm text-[#646464]'>MOQ</p>
                                            <p className='font-poppins font-normal text-sm'>100</p>
                                        </div>
                                        <div>
                                            <Link to={'./'}>
                                                <RoundedButton title={"Edit"} color={"#EBF2FF"} handleClick={handleClick} className={"bg-[#4F8BED] rounded-[4px] text-sm font-poppins font-normal text-white px-5"} />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    )}
            </div>
            <AddProductComp className={"absolute top-[20rem] right-[12%] "} />
        </div>
    );
};

export default InventoryTable;
