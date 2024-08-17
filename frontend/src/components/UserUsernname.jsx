import React from 'react'

const UserUsernname = (props) => {
    console.log(props.username)
  return (
  
    <div>
        <b>Username: </b>
        <span>
           { props.username}
        </span>
    </div>
  )
}

export default UserUsernname