import React from 'react'
import PropTypes from 'prop-types';
const UserDetails = ({user}) => {
  return (
    <div key={user.id}>
          <b>ID: </b>
          <span>{user.id}</span>
          <br/>
          <b>Username: </b>
          <span>{user.username}</span>
    </div>
    
  )
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired
  })
}

export default UserDetails