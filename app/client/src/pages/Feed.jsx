import React from 'react'
import {Link} from "react-router-dom"
const Feed = () => {
  return (
    
    <div className='feeds'>
      <Link to={'/video/20/4521'} className='card'>
        <img src='' alt="" />
        <h2>Best Channel to learn history</h2>
        <h3>HistoryBuff</h3>
        <p>15k views &bull; 2 days ago</p>
      </Link>
      {/* <div className='card'>
        <img src='' alt="" />
        <h2>Best Channel to learn history</h2>
        <h3>HistoryBuff</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
      <img src='' alt="" />
      <h2>Best Channel to learn history</h2>
      <h3>HistoryBuff</h3>
      <p>15k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
        <img src='' alt="" />
        <h2>Best Channel to learn history</h2>
        <h3>HistoryBuff</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
        <img src='' alt="" />
        <h2>Best Channel to learn history</h2>
        <h3>HistoryBuff</h3>
        <p>15k views &bull; 2 days ago</p>
      </div>
      <div className='card'>
          <img src='' alt="" />
          <h2>Best Channel to learn history</h2>
          <h3>HistoryBuff</h3>
          <p>15k views &bull; 2 days ago</p>
      </div> */}
    </div>
    

  )
}

export default Feed