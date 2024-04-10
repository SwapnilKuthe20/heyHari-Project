import React from 'react'
import { walletTableImg } from '../Assets/Images'
import MyWallet from './MyWallet'

function MyWalletMain() {

    const walletData = [
        {
            id: 1,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 2,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 3,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 4,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 5,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 6,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 7,
            img: walletTableImg,
            imgDescription: 'Your post for XYZ product was viewed by ABC User',
            date: '12/01/2024',
            debit: '-₹1',
            credit: null,
            viewInvoice: null
        },
        {
            id: 8,
            img: null,
            imgDescription: 'Your wallet was recharged successfully!',
            date: '12/01/2024',
            debit:null,
            credit: '+₹10,000',
            viewInvoice: 'View Invoice'
        },
    ]

    return (
        <>
            <MyWallet walletData={walletData}/>
        </>
    )
}
export default MyWalletMain