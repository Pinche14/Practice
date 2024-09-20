import React, {useEffect} from 'react'
import useDocument from '../utlis/useDocument'

const LoginForm = () => {
    useEffect(() => {
        const resizeEventHandler = (e) => [
          console.log("window/ViewPort Reszied")
        ]

        // const handleDocumentClick = (e) => {
        //   console.log("Clicked Document")
        // }
        window.addEventListener('resize' , resizeEventHandler )
        //document.addEventListener('click', handleDocumentClick)
    
        return () => {
          console.log("Unmounting LoginForm")
          console.log("removing Resize Event Listener")
          window.removeEventListener('resize' , resizeEventHandler)
          //document.removeEventListener("click", handleDocumentClick)
        };
      }, [])

      useDocument()

      
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