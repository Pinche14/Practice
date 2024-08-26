import React from 'react'

const UserUsernname = (props) => {
    console.log(props.username)
  return (
  
    <React.Fragment>
        <b>Username: </b>
        <span>
           { props.username}
        </span>
        <br/>
        {/* <b>Age: </b>
        <span>
          {props.age}
        </span> */}
    </React.Fragment>
  )
}

export default UserUsernname