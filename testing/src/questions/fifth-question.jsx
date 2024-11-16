import React from 'react'

const FifthQuestion = () => {
    const names = ["Brian", "Paul", "Krug", "Halley"];
    const listItems = names.map((name) => <li>{name}</li>);
  return (
   
    <div>
        {listItems}
    </div>
  )
}

export default FifthQuestion