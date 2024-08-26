import React from 'react'

const UserDetails = ({user}) => {
  return (
    <div>
          <b>ID: </b>
          <span>{user.id}</span>
          <br/>
          <b>Username: </b>
          <span>{user.username}</span>
    </div>
    
  )
}

export default UserDetails