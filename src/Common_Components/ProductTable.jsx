import React from 'react'


function ProductTable({ ProductTableData }) {

    return (
        <>
            <div className='w-[630px] max-h-[475px] border rounded-xl border-black mt-5  overflow-auto'>
                <div className='overflow-hidden'>
                    <div className='flex justify-between  py-2.5 px-5  border-b border-black' >
                        <h1 className='text-base font-medium '>Product</h1>
                        <h1 className='text-base font-medium'>Quantity</h1>
                    </div>
                </div>

                {
                    ProductTableData?.map((rows, index) => {
                        const { productLable, code, brandName, availStockLabel, stockQuantity } = rows

                        return (
                            <>
                                <div key={index} className='flex justify-between py-2.5 px-5 even:bg-[#E9E9E9] odd:bg-[#F5F5F5]'>
                                    <div className=''>
                                        <h2 className='text-sm font-normal'>{productLable}</h2>
                                        <div className='flex'>
                                            <img src="" alt="" />
                                            <h3 className='text-xs font-normal'>{code}</h3>
                                        </div>
                                    </div>

                                    <div>
                                        <h2 className='text-xs font-medium'> {brandName}</h2>
                                    </div>

                                    <div>
                                        <h3 className='text-[10px] text-[#19B500]'>{availStockLabel}</h3>
                                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                                            <h4 className='text-base'>{stockQuantity}</h4>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ProductTable



{/* 
                <div className='flex justify-between py-2.5 px-5 bg-[#E9E9E9]'>
                    <div className=''>
                        <h2 className='text-sm font-normal'>Steering System</h2>
                        <div className='flex'>
                            <img src="" alt="" />
                            <h3 className='text-xs font-normal'>Code 12345AAA 123</h3>
                        </div>
                    </div>

                    <div>
                        <h2 className='text-xs font-medium'> Brand Name</h2>
                    </div>

                    <div>
                        <h3 className='text-[10px] text-[#19B500]'>Available in stock</h3>
                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                            <h4 className='text-base'>200</h4>
                        </div>

                    </div>
                </div>

                <div className='flex justify-between py-2.5 px-5 bg-[#F5F5F5]'>
                    <div className=''>
                        <h2 className='text-sm font-normal'>Steering System</h2>
                        <div className='flex'>
                            <img src="" alt="" />
                            <h3 className='text-xs font-normal'>Code 12345AAA 123</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xs font-medium'> Brand Name</h2>
                    </div>
                    <div>
                        <h3 className='text-[10px] text-[#19B500]'>Available in stock</h3>
                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                            <h4 className='text-base'>250</h4>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between py-2.5 px-5  bg-[#E9E9E9]'>
                    <div className=''>
                        <h2 className='text-sm font-normal'>Steering System</h2>
                        <div className='flex'>
                            <img src="" alt="" />
                            <h3 className='text-xs font-normal'>Code 12345AAA 123</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xs font-medium'> Brand Name</h2>
                    </div>
                    <div>
                        <h3 className='text-[10px] text-[#19B500]'>Available in stock</h3>
                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                            <h4 className='text-base'>150</h4>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between py-2.5 px-5  bg-[#F5F5F5]'>
                    <div className=''>
                        <h2 className='text-sm font-normal'>Steering System</h2>
                        <div className='flex'>
                            <img src="" alt="" />
                            <h3 className='text-xs font-normal'>Code 12345AAA 123</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xs font-medium'> Brand Name</h2>
                    </div>
                    <div>
                        <h3 className='text-[10px] text-[#FF9900]'>Available in stock</h3>
                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                            <h4 className='text-base'>500</h4>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between py-2.5 px-5  bg-[#E9E9E9]'>
                    <div className=''>
                        <h2 className='text-sm font-normal'>Steering System</h2>
                        <div className='flex'>
                            <img src="" alt="" />
                            <h3 className='text-xs font-normal'>Code 12345AAA 123</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xs font-medium'> Brand Name</h2>
                    </div>
                    <div>
                        <h3 className='text-[10px] text-[#19B500]'>Available in stock</h3>
                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                            <h4 className='text-base'>350</h4>
                        </div>
                    </div>
                </div>

                <div className='flex justify-between py-2.5 px-5  bg-[#F5F5F5]'>
                    <div className=''>
                        <h2 className='text-sm font-normal'>Steering System</h2>
                        <div className='flex'>
                            <img src="" alt="" />
                            <h3 className='text-xs font-normal'>Code 12345AAA 123</h3>
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xs font-medium'> Brand Name</h2>
                    </div>
                    <div>
                        <h3 className='text-[10px] text-[#FF9900]'>Available in stock</h3>
                        <div className='w-20 border rounded-lg bg-white py-0.5 text-center '>
                            <h4 className='text-base'>50</h4>
                        </div>
                    </div>
                </div>
            */}
