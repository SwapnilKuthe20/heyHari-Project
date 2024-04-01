import React, { useState } from 'react'
import DashboardCard from './DashboardCard'

function DashboardCardMain() {
  const [activeCard, setActiveCard] = useState(null);

  const InfoCarddata = [
    {
      id: 1,
      catagory: 'My Orders Value',
      items: [
        { orderStatus: 'total', totalTransaction: "90,000" },
        { orderStatus: 'pending', totalTransaction: "10,000" },
        { orderStatus: 'dispatch', totalTransaction: "80,000" },
        { orderStatus: 'delivered', totalTransaction: "80,000" },
        { orderStatus: 'return', totalTransaction: "0" },
        { orderStatus: 'completed', totalTransaction: "80,000" },
      ]
    },
    
    {
      id: 2,
      catagory: 'Inventory',
      items: [
        { productStatus: 'Products', productNos: "150" },
        { productStatus: 'Available', productNos: "140" },
        { productStatus: 'Out of Stock', productNos: "10" },
        { productStatus: 'Limited in Stock', productNos: "30" },
      ]
    },
    
    {
      id: 3,
      catagory: 'Collections',
      items: [
        { collectionStatus: 'Total', collectionTransaction: "90,000" },
        { collectionStatus: 'Received', collectionTransaction: "80,000" },
        { collectionStatus: 'Pending', collectionTransaction: "10,000" },
      ]
    },
    
    {
      id: 4,
      catagory: 'Post Insights',
      items: [
        { postLabel: 'Posts', postStatus: "150" },
        { postLabel: 'Post Clicked', postStatus: "140" },
        { postLabel: 'Orders Placed', postStatus: "10" },
        { postLabel: 'Profile Viewed', postStatus: "10" },
        { postLabel: 'Cost Incurred', postStatus: "1,00,000" },
      ]
    }
  ]
  const handleClick = (cardId) => {
    setActiveCard(cardId === activeCard ? null : cardId)
  }
  
  return (
    <>
      <DashboardCard handleClick={handleClick} activeCard={activeCard} InfoCarddata={InfoCarddata} />
    </> 
  )
}

export default DashboardCardMain
