import React from 'react'
import ProfileRating from './ProfileRating'
import StarRating from '../Common_Components/StarRating'
import { IoMdStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";


const OrderReceiveMain = ({ OrderReceivelist }) => {
  const handleClick = () => {
    alert("View Details clicked")
  }
  const stars = 4.6

  return (
    <>
      <div className=' m-5 '>
        <ProfileRating />
      </div>
      <div className='flex justify-between ms-5 mb-3'>
        <p className='text-base font-medium font-poppins'>Orders Received</p>
        <p className='text-xs font-normal font-poppins text-[#737373]'>See All</p>
      </div>
      {/* ****************************** List of orders received**************************** */}
      <div className='w-[25vw] ms-5  h-[84vh] overflow-auto focus:scroll-auto custom-scrollbar border-y'>
        {OrderReceivelist.map((rows, index) => {
          const { profile, name, status, price, productimage, order_id } = rows
          return (
            <div key={index} className=' flex justify-between border-b m-2 '>
              <div>
                <div className='flex items-center gap-4'>
                  <div className='w-[60px]'><img src={profile} alt="..." /></div>
                  <div>
                    <p className='font-poppins text-sm font-normal'>{name}</p>
                    {/* <StarRating stars={stars} /> */}
                    <div className='flex'>
                      {[...Array(5)].map((element, index) => {
                        let number = index + 0.5;
                        return (
                          <span key={index} >
                            {stars >= index + 1 ?
                              <IoMdStar className='text-[#19B500]' /> : stars >= number ? <IoMdStarHalf className='text-[#19B500]' /> : <IoMdStarOutline />
                            }
                          </span>
                        )
                      })}
                      <StarRating stars={stars} />
                    </div>
                  </div>
                </div>
                <div className='text-xs font-poppins font-normal text-[#646464] mt-2'> <p>{status}</p></div>
                <div className='font-poppins text-xl font-normal mt-2'><p>{price}</p> </div>
                <div className='font-poppins font-normal text-sm text-[#646464] my-2'><p>Order ID- {order_id}</p></div>
              </div>
              <div>
                <div className='w-20'><img src={productimage} alt="" /></div>
                <div className='font-poppins font-normal text-sm mt-3 text-[#4F8BED] underline underline-offset-2'><a href="#" onClick={handleClick} >View order</a></div>
              </div>
            </div>
          )
        })}
      </div>

    </>
  )
}

export default OrderReceiveMain
