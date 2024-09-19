import React, {useEffect} from 'react'

const LoginForm = () => {
    useEffect(() => {
        const resizeEventHandler = (e) => [
          console.log("window/ViewPort Reszied")
        ]
        window.addEventListener('resize' , resizeEventHandler )
    
        return () => {
          console.log("Unmounting LoginForm")
          console.log("removing Resize Event Listener")
          window.removeEventListener('resize' , resizeEventHandler)
        }
      }, [])

      
  return (
    <from 
        onSubmit={(e) => {
        e.preventDefault()
        const formData =  new FormData(e.target);
        const username = formData.get("username")
        const password = formData.get("password")
        fetch("http://localhost:3001/api/login", {
            body: {
                username,
                password,
            },
            method: "POST"
        })
       // console.log(formData.get('username'));
    }}>
        <br/>
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
            name = "password"
        />
        <br />
        <button>Login</button>
    </from>
  )
}

export default LoginForm