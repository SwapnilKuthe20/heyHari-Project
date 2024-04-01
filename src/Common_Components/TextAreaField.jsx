import React from 'react'

function TextAreaField({ name, value, placeholder, width, height, handleTextArea }) {
    return (
        <>
            <div className='my-4 '>
                <label htmlFor='textarea'></label>
                <textarea id='textarea' name={name} value={value} placeholder={placeholder}
                    onChange={handleTextArea} className={`focus:outline-none border-solid border-2 border-[#A5A5A5] rounded p-2 w-[${width}] h-[${height}]`} />
            </div>
        </>
    )
}

export default TextAreaField
