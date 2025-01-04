import React from 'react'

const Navbar = ({navbar}) => {
  return (
   
    <nav className='navigation-bar'  style={{backgroundColor:'yellow', display:'flex', gap:'30px'}}>
      <div className='navigation-audio'>
        <p>Audio</p>
      </div>
      <div className='navigation-blog'>
        <p>Blog</p>
      </div>
      <div className='navigation-video'>
        <p>Video</p>
      </div>
      <div className='navigation-photos'>
        <p>Photos</p>
      </div>
    </nav>
    
  )
}

export default Navbar