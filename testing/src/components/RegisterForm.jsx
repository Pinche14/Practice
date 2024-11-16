import React from 'react'
import { useState } from 'react'

const RegisterForm = () => {
  console.log(useState())
  // const [username, setUsername] = useState("")
  // const [password, setPassword] = useState("")
  // const [displayName, setDisplayName] = useState("")

  const [formFields , setFormFields] = useState({
    username:"",
    password:"",
    displayName:""
  })

  //const isDisabled = !formFields.username || !formFields.password || !formFields.displayName

  return (
    <form>
        <div>
          <label htmlFor="username">Username</label>
          <input 
          id="username" 
          value={formFields.username} 
          onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState, 
              username: e.target.value
            }))
          //setUsername(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input id="password" value={formFields.password} onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              password: e.target.value
            }))
            //setPassword(e.target.value)
          }}/>
        </div>
        <div>
          <label htmlFor="displayName">Display Name</label>
          <input id="displayName" value={formFields.displayName} onChange={(e) => {
            setFormFields((currentState) => ({
              ...currentState,
              displayName: e.target.value
            }))
            //setDisplayName(e.target.value)
          }}/>
        </div>
        <button>Sign Up</button>
    </form>
  
  )
}

export default RegisterForm