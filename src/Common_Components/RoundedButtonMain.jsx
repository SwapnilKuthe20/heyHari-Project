import React,{useState} from 'react'
import RoundedButton from './RoundedButton'

function RoundedButtonMain() {
    const [btn, setBtn] = useState(false)

    const handleClick=()=>{
      alert("Button clicked")
        setBtn(!btn)
    }
    
  return (
    <>
      <RoundedButton  title={"Cancel"} color={"#EBF2FF"} btn={btn} handleClick={handleClick} />
    </>
  )
}

export default RoundedButtonMain
