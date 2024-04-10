import React from 'react'

function DashboardCard({ handleClick, activeCard, InfoCarddata }) {

  return (
    <>
      {
        InfoCarddata?.map((item) => {
          const { id, catagory, items } = item

          if (catagory === 'My Orders Value') {
            return (
              <div key={id} onClick={() => handleClick(id)} className={`flex flex-col w-[243px] h-[150px] bg-card-1 bg-cover text-[10px] text-white rounded-xl ${activeCard === id ? 'ring-4 ring-[#4F8BED] ring-inset' : ''}`} >
                <div className=' w-9/12 m-auto'>
                  <ul className='' >
                    {
                      items?.map((element, index) => {
                        const { orderStatus, totalTransaction } = element
                        return (
                          <div key={index} className='flex justify-between '>
                            <li>{orderStatus}</li>
                            <li>{totalTransaction}</li>
                          </div>
                        )
                      })
                    }
                  </ul>
                </div>
                <h2 className='text-base font-black block m-auto'>{catagory}</h2>
              </div >
            )
          }

          if (catagory === 'Inventory') {
            return (
              <div key={id} onClick={() => handleClick(id)} className={`flex flex-col w-[243px] h-[150px] bg-card-2 bg-cover text-[10px] text-white rounded-xl ${activeCard === id ? 'ring-4 ring-[#4F8BED] ring-inset' : ''} `} >
                <div className=' w-9/12 m-auto'>
                  <ul className='' >
                    {
                      items?.map((element, index) => {
                        const { productStatus, productNos } = element
                        return (
                          <>
                            <div key={index} className='flex justify-between'>
                              <li>{productStatus}</li>
                              <li>{productNos}</li>
                            </div>
                          </>
                        )
                      })
                    }
                  </ul>
                </div >
                <h2 className='text-base font-black block m-auto'>{catagory}</h2>
              </div>
            )
          }

          if (catagory === 'Collections') {
            return (
              <div key={id} onClick={() => handleClick(id)} className={`flex flex-col w-[243px] h-[150px] bg-card-3 bg-cover text-[10px] text-white rounded-xl ${activeCard === id ? 'ring-4 ring-[#4F8BED] ring-inset' : ''}`} >
                <div className=' w-9/12 m-auto'>
                  <ul className='' >
                    {
                      items?.map((element, index) => {
                        const { collectionStatus, collectionTransaction } = element
                        return (
                          <>
                            <div key={index} className='flex justify-between'>
                              <li>{collectionStatus}</li>
                              <li>{collectionTransaction}</li>
                            </div>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
                <h2 className='text-base font-black block m-auto'>{catagory}</h2>
              </div >
            )
          }

          if (catagory === 'Post Insights') {
            return (
              <div key={id} onClick={() => handleClick(id)} className={`flex flex-col w-[243px] h-[150px] bg-card-4 bg-cover text-[10px] text-white rounded-xl ${activeCard === id ? 'ring-4 ring-[#4F8BED] ring-inset' : ''} `} >
                <div className=' w-9/12 m-auto'>
                  <ul className='' >
                    {
                      items?.map((element, index) => {
                        const { postLabel, postStatus } = element
                        return (
                          <>
                            <div key={index} className='flex justify-between'>
                              <li>{postLabel}</li>
                              <li>{postStatus}</li>
                            </div>
                          </>
                        )
                      })
                    }
                  </ul>
                </div>
                <h2 className='text-base font-black block m-auto'>{catagory}</h2>
              </div >
            )
          }
        })
      }
    </>
  )
}

export default DashboardCard;
