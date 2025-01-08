import React from 'react'

const Navbar = ({navbar,type,setType}) => {
  return (
   
    <nav className='navigation-bar'  style={{backgroundColor:'yellow', display:'flex', gap:'30px'}}>
      <div className='navigation-audio' onClick={() => setType("Ks-_Mh1QhMc")} >
        <p style={{textDecoration: 'underline'}}>Video</p>
      </div>
      <div className='navigation-blog' onClick={() => setType(0)}>
        <p>Blog</p>
      </div>
      <div className='navigation-video' onClick={() => setType(0)}>
        <p>Audio</p>
      </div>
      <div className='navigation-photos' onClick={() => setType(0)}>
        <p>Photos</p>
      </div>
    </nav>
    
  )
}

export default Navbar