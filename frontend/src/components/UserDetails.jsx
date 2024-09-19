import React ,{useState} from 'react'
import PropTypes from 'prop-types';
const UserDetails = ({user , setUsers}) => {
  // const mockUsers = [
  //   {
  //     id: 1,
  //     username: 'Shubham',
  //     email: 'shubham70254@gmail.com'
  //   },
  //   {
  //     id: 2,
  //     username: "Vikas",
  //     email: 'vikas123@gmail.com'
  //   },
    
  // ]
  // const work = () => {
  //   console.log("Work")
  // }

  // window.addEventListener('resize', (e) => {
  //   console.log(window.innerHeight,window.innerWidth)
  // });
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
        <button onClick={() =>{
          setUsers((currentUsersState) => currentUsersState.filter(
            (currentuser) => currentuser.id !== user.id
          ))
        }}
        >
          Delete
        </button>
        {isEditing && (
          <button onClick={() => {
            setUsers((currentUsersState) => {
              return currentUsersState.map((currentuser) => {
                  if(currentuser.id === user.id)
                    return {...currentuser, username: username, email};
                  else return currentuser;
                })
            })
            setIsEditing(false)
          }}
          >
            Save
          </button>
        )}
        
      </div>
      <div key={user.id}>
          <b>ID:{user.id} </b>
          <br/>
          <b>Username: </b>
          {isEditing ? (
            <input 
                name='username' 
                id="username" 
                value={username} 
                onChange={(e)=> {
                  setUsername(e.target.value)
                }}/>
          ) : (
            <span>{user.username}</span>
          )}
          <br/>
          <b>Email: </b>
          {isEditing ? (
            <input 
                name='email' 
                id="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value)
                }}/>
          ) : (
            <span>{user.email}</span>
          )}
      </div>
    </div>
    
    
  )
}

UserDetails.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }),
  setUsers: PropTypes.func.isRequired
}

export default UserDetails