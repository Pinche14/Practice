import React, { useEffect, useState } from 'react'

const FourthQuestion = () => {
    const [count , setCount] = useState(0)
    useEffect(() => {
        console.log("Component rendered successfully")
    },[])
  return (
    
    <div>
        <button onClick={() => setCount(count+1)}>Click</button>
        <p>You Clicked {count} times</p>
    </div>
  )
}

export default FourthQuestion