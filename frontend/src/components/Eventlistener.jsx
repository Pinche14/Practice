import React , {useEffect, useState} from 'react'
import LoginForm from './LoginForm'


const Eventlistener = () => {
  const [toggle, setToggle] = useState(false)
  
  return (
    <div>
      <button onClick={() => setToggle((currentState) => !currentState)}>
      Toggle
     </button>
     {toggle &&  <LoginForm/>}
    </div>
  
    //<div>Eventlistener</div>
  )
}

export default Eventlistener