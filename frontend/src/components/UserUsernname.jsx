import React from 'react'

const UserUsernname = (props) => {
    console.log(props.username)
  return (
  
    <div>
        <b>Username: </b>
        <span>
           { props.username}
        </span>
        <br/>
        <b>Age: </b>
        <span>
          {props.age}
        </span>
    </div>
  )
}

export default UserUsernname