import React , {useState, useEffect} from 'react'

const Main = () => {

  const API_URL = "https://jsonplaceholder.typicode.com/photos"

  //const [videos, setVideos] = useState([])

 async function getVideos() {
  const url = "https://jsonplaceholder.typicode.com/photos"
  try{
    const response = await fetch(url)
    if(!response.ok){
      throw new Error(`Response status: ${response.status}`)
    }
    const json = await response.json()
    console.log(json)
  }catch(error){
    console.log(error.message)
  }
 }
 
  
  return (
    <div className='main-video'style={{backgroundColor:'beige',height:'700px'}}>
      {/* {videos.length === 0 ? (
        <p>Loading Video...</p>
      ): (
        videos.map((video,index) => (
          <video key={index}>
            <source src={video} type="video/mp4"/>
          </video>
        ))
      )} */}
    </div>
  )
}

export default Main

//video