import React, {useState,useEffect} from 'react'

const UsernameDisplay = ({username}) => {

  const [timerPassed, setTimerPassed] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setTimerPassed(true)
    },5000);
  }, []);
  
  return (
    <div>
        <span>{timerPassed && username}</span>
    </div>
  )
}

export default UsernameDisplay