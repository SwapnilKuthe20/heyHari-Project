import React, { useState } from 'react'
import TextAreaField from './TextAreaField';

function TextAreaFieldMain() {

    const [textArea, setTextArea] = useState({
        name: '',
    })

    const handleTextArea = (e) => {
        setTextArea({
            ...textArea,
            [e.target.name]: e.target.value
        })
        console.log(e.target.value)
    }

    return (
        <>
            <TextAreaField name={"name"} placeholder={"Enter Message....."} width={"285px"} height={"100px"} value={textArea.name} handleTextArea={handleTextArea} />
        </>
    )
}

export default TextAreaFieldMain
