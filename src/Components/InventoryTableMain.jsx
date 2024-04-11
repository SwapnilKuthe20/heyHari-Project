import React from 'react'
import InventoryTable from './InventoryTable'
import productimage from '../Assets/Images/ProductImg.png'


function InventoryTableMain() {
    const InventorytableItems = [
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Available in stock", stockquantity: 200 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Limited in stock", stockquantity: 100 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Out of stock", stockquantity: "-" },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Available in stock", stockquantity: 500 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Available in stock", stockquantity: 330 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Limited in stock", stockquantity: 50 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Available in stock", stockquantity: 200 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Out of stock", stockquantity: "-" },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Available in stock", stockquantity: 200 },
    { productlabel: "Steering System", productimage:productimage, code: "Code 12345AAA 123", GST: "7%", HSNCode: 123456, MRP: "₹8999", OfferPrice: "₹5499", brandname: "Brand Name", status: "Available in stock", stockquantity: 200 },
    ]
    return (
        <div>
            <InventoryTable InventorytableItems={InventorytableItems} />
        </div>
    )
}

export default InventoryTableMain
