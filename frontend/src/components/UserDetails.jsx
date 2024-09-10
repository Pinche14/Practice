import React ,{useState} from 'react'
import PropTypes from 'prop-types';
const UserDetails = ({user}) => {
  const [isEditing, setIsEditing] = useState(false)
  const [username, setUsername] = useState(user.username)
  const [email, setEmail] = useState(user.email)
  console.log(isEditing)
  return (
    <div>
      <div>
        <button 
        onClick={() => {
          setIsEditing((currentState) => !currentState)
        }}
        >Edit
        </button>
        <button>Delete</button>
        <button>Save</button>
      </div>
      <div key={user.id}>
          <b>ID: </b>
          <br/>
          <b>Username: </b>
          {isEditing ? <input name='username' id="username"/> : <span>{user.username}</span>}
          <br/>
          <b>Email: </b>
          {isEditing ? <input name='email' id="email"/> : <span>{user.email}</span>}
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