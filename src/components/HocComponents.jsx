import React, { useState } from 'react'

const HocComponents = (HocFunction) => {
    function HocComponents(){
        const [counter,setCounter]=useState(0)

        const handleCounter=()=>{
            setCounter(counter+1)
        }
        return <HocFunction counter={counter} handleCounter={handleCounter} />
    }
  return HocComponents
}

export default HocComponents;
