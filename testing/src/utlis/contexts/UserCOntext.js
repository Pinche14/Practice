
import { createContext } from 'react'

export const UserCOntext = createContext({
    id:0,
    username:"",
    email:"",
    displayName:"",
    setUserData: () => {},
})