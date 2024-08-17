import React, { useState } from 'react'

const SixthQuestion = () => {
    const [value, setValue] = useState("")
    function handleChange(event) {
        setValue(event.target.value);
    }
  return (
    <div>
        <input type='text' value={value} onChange={handleChange}/>
        <p>You entered: {value}</p>
    </div>
  )
}

export default SixthQuestion