import React,{useState,useEffect} from 'react'
import PlayVideo from './PlayVideo'

const Video = () => {
  //   const API_URL = "https://api.sampleapis.com/movies/animation"

  // const [videos, setVideos] = useState([])

  // const getVideos = async () => {
  //   try {
  //     const res = await fetch(API_URL)
  //     const json = await res.json()
  //     console.log(json)
  //     setVideos(json.slice(0,3))
  //   } catch (error) {
  //     console.error("Error",error)
      
  //   }
  // }
  
  // useEffect(() => {
  //   getVideos(API_URL)
  // },[])
  return (
    // <div >
    //   {videos.map((video,index) => (
    //     <div className="photos" key={index}>
    //       <video 
    //           src={video.posterURL} 
    //           controls
    //           style={{ width: "100%", maxWidth: "500px" }}
    //       />
    //       <span>{video.title}</span>
    //     </div>
    //   ))}
    // </div>
    <div className='play-container'>
      <PlayVideo/>
    </div>
  )
}

export default Video