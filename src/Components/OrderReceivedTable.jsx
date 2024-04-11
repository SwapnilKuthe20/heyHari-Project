import React from 'react'
import Ellipseimg1 from "./../Assets/Images/Ellipseimg1.png"
import Ellipseimg2 from "./../Assets/Images/Ellipseimg2.png"
import Ellipseimg3 from "./../Assets/Images/Ellipseimg3.png"
import Ellipseimg4 from "./../Assets/Images/Ellipseimg4.png"
import Ellipseimg5 from "./../Assets/Images/Ellipseimg5.png"
import Ellipseimg6 from "./../Assets/Images/Ellipseimg6.png"
import Ellipseimg7 from "./../Assets/Images/Ellipseimg7.png"
import Ellipseimg8 from "./../Assets/Images/Ellipseimg8.png"
import auto_part from '../Assets/Images/auto-part-img.png'
import OrderReceiveMain from './OrderReceiveMain'

function OrderReceivedTable() {
    const OrderReceivelist =[
        { profile:Ellipseimg1, name:"Lorem ipsum", status:"Get Quote", price:"₹5,54,900.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg2, name:"Lorem ipsum", status:"Get Quote", price:"₹2,89,000.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg3, name:"Lorem ipsum", status:"Get Quote", price:"₹3,09,000.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg4, name:"Lorem ipsum", status:"Buy Now", price:"₹5,54,900.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg5, name:"Lorem ipsum", status:"Get Quote", price:"₹4,00,000.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg6, name:"Lorem ipsum", status:"Get Quote", price:"₹5,50,000.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg7, name:"Lorem ipsum", status:"Get Quote", price:"₹5,54,900.00",productimage:auto_part, order_id:"IN22356439425749"},
        { profile:Ellipseimg8, name:"Lorem ipsum", status:"Buy Now", price:"₹3,09,000.00",productimage:auto_part, order_id:"IN22356439425749"}
    ]
    return(
    <div>
      <OrderReceiveMain OrderReceivelist={OrderReceivelist} />
    </div>
  )
}

export default OrderReceivedTable
