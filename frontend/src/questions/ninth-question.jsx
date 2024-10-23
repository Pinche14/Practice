import React from 'react'
import {useState} from 'react'

const NinthQuestion = () => {

  const [columns, setColumn] = useState({
    column1: ['item1', 'item2'],
    column2: ['item3', 'item4']
  })

  return (

    <div className='container'>
      {Object.keys(columns).map((column) => (
        <div
          className='column'
          key={column}
        >
          
        </div>
      ))}
    </div>
  )
}

export default NinthQuestion