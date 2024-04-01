import React from 'react'
import ProductTable from './ProductTable'

function ProductTableMain() {

    const ProductTableData=[
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
        {productLable:"Steering System", code:"Code 12345AAA 123",brandName:"Brand Name", availStockLabel :"Available in stock", stockQuantity:200},
    ]
    return (
        <>
            <ProductTable  ProductTableData={ProductTableData}/>
        </>
    )
}

export default ProductTableMain


