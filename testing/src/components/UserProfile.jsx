import React from 'react'
import UserFavouriteFoods from './UserFavouriteFoods'
import UserUsernname from './UserUsernname'
import PropTypes from 'prop-types';
const UserProfile = (props) => {
  console.log(props)

  props.work()
  
  return (
    <div id='user-profile'>
        <UserUsernname username = {props.username}/>
        <b>Age: </b>
        <span>{props.age}</span>
        <UserFavouriteFoods/>
    </div>
  )
} 
UserProfile.propTypes ={
  username: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  work: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool,
  favouriteFoods: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  )

}

export default UserProfile