import React from 'react'

  const isAuthenticated = true

  const USER_STATUS = 'ZERO';

  if(USER_STATUS === 'NOT_VERIFIED'){
    return (
      <div>
        <span>
          You are not verified. Please verify Email.
        </span>
      </div>
    )
  }
  else if (USER_STATUS === 'VERIFIED') {
    return(
      <div>
        You are verified.
      </div>
    )
  } else if  (USER_STATUS === 'DISABLED') {
    return(
      <div>
        <span>Your account has been disabled.</span>
      </div>
    )

  }
  else  {
    return(
      <div>
        <span>Contact admin.</span>
      </div>
    )
  }

  if(isAuthenticated){
    return (
      <div>
      <h1>Hy There!</h1>
    </div>
    );
  } else {
    return (
    <div>
      <span>You are not logged in</span>
    </div>
    )
  }
const Authentication = () => {
  return (
    <div>Authentication</div>
  )
}

export default Authentication