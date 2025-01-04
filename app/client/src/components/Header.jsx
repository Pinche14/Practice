import React from 'react'

const Header = ({setNavbar}) => {
  return (
    <div className='header' style={{display: 'flex', gap: '2rem'}}>
      <div className='logo' onClick={() => setNavbar(prev=>prev===false?true:false)}>Logo</div>

      <div className='search-bar'>
       <input type="text" />
      </div>

      <div className='create'>
        Uplaod
      </div>

      <div className='notification'>
        Notification
      </div>

      <div className='profile'>
        Profile
      </div>
    </div>
    
  )
}

export default Header