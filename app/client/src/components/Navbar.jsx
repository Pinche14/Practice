import React from 'react'

const Navbar = ({navbar,type,setType}) => {
  return (
   
    <nav className='navigation-bar'  style={{backgroundColor:'yellow', display:'flex', gap:'30px'}}>
      <div className='navigation-audio'  >
        <p style={{textDecoration: 'underline'}} onClick={() => setType("Ks-_Mh1QhMc")}>Video</p>
      </div>
      <div className='navigation-blog' onClick={() => setType(0)}>
        <p style={{textDecoration: 'underline'}}>Blog</p>
      </div>
      <div className='navigation-video' onClick={() => setType(0)}>
        <p style={{textDecoration: 'underline'}}>Audio</p>
      </div>
      <div className='navigation-photos' onClick={() => setType(0)}>
        <p style={{textDecoration: 'underline'}}>Photos</p>
      </div>
    </nav>
    
  )
}

export default Navbar