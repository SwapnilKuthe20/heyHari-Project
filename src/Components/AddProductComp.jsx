import React, { useState } from 'react'
import UploadImgicon from '../Assets/Images/UploadImgicon.png'
import { Link } from 'react-router-dom'
import RoundedButton from '../Common_Components/RoundedButton'

const AddProductComp = ({ className }) => {
    const [uplaodfile, setUplaodfile] = useState(false)
    const uploadClick = () => {
        alert("Button clicked!");
        setUplaodfile(!uplaodfile);
    }
    return (
        <div>
            <div className={` ${className}`}>
                <div className="text-center" >
                    <h3 className='text-base font-poppins font-normal' >Update your inventory</h3>
                    <div className='w-16 m-auto my-2'>
                        <img src={UploadImgicon} alt="Upload_image" className='w-full' />
                    </div>
                    <Link to={'./'}>
                        <RoundedButton title={"Add a product"} handleClick={uploadClick} className={"bg-[#4F8BED] rounded-lg text-sm font-poppins font-normal text-white px-4 py-1"} />
                    </Link>

                </div>
            </div>

        </div>
    )
}

export default AddProductComp
