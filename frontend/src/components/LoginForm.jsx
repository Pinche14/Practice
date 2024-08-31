import React from 'react'

const LoginForm = () => {
  return (
    <from onSubmit={(e) => {
        e.preventDefault()
    }}>
        <label htmlFor="username">Username</label>
        <br/>
        <input id="username" 
            onChange={(e) => {
                console.log(`Username : ${e.target.value}`);
            }} 
            name="username"
        />
        <br />
        <label htmlFor="password">Password</label>
        <br />
        <input 
            id="password" 
            type='password' 
            onChange={(e)=>{
            console.log(`Password: ${e.target.value}`);
            }}
            
        />
        <br />
        <button>Login</button>
    </from>
  )
}

export default LoginForm