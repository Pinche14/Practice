import React from 'react'
import { useState } from 'react'

const RegisterForm = () => {
  console.log(useState())
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [displayName, setDisplayName] = useState("")

  return (
    <form>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          id="username" 
          value={username} 
          onChange={(e) => {
          setUsername(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" value={password} onChange={(e) => {
            setPassword(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input id="displayName" value={displayName} onChange={(e) => {
            setDisplayName(e.target.value)
          }}/>
        </div>
    </form>
  
  )
}

export default RegisterForm