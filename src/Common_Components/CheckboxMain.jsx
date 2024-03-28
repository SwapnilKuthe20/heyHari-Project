import React, { useState } from 'react'
import Checkbox from './Checkbox'

function CheckboxMain() {

    const [checkState, setCheckState] = useState(false)

    let handleCheck = (e) => {
        console.log(e.target.checked);
        setCheckState(
            e.target.checked
        )
        // alert("Checkbox checked");

    }

    return (
        <>
            <Checkbox handleCheck={handleCheck} checked={checkState}/>
        </>
    )
}

export default CheckboxMain
