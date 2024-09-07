import React ,{useState} from 'react'
import PropTypes from 'prop-types';
const UserDetails = ({user}) => {
  const [isEditing, setIsEditing] = useState(false)

  console.log(isEditing)
  return (
    <div>
      <div>
        <button 
        onClick={() => {
          setIsEditing((currentState) => !currentState)
        }}
        >Edit</button>
        <button>Delete</button>
      </div>
      <div key={user.id}>
          <b>ID: </b>
          {isEditing ? <input value={user.id}/> : <span>{user.id}</span>}
          <br/>
          <b>Username: </b>
          {isEditing ? <input name='username' id="username"/> : <span>{user.username}</span>}
          <br/>
          <b>Email: </b>
          {isEditing ? <input value={user.email}/> : <span>{user.email}</span>}
      </div>
    </div>
    
    
  )
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  })
}

export default UserDetails