import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar"
import Feed from "../pages/Feed";

const Home = ({navbar}) => {

  return (
    <>
       <Navbar navbar={navbar}/>
       <div className="feed">
        <Feed/>
       </div>
    </>
   
  )
  
  // const API_URL = "https://jsonplaceholder.typicode.com/photos";

  // const [photos, setPhotos] = useState([]);
  // const [search, setSearch] = useState(""); // State for search input
  // const [filteredPhotos, setFilteredPhotos] = useState([]); // State for filtered photos

  // // Function to fetch photos
  // const getPhotos = async () => {
  //   try {
  //     const response = await fetch(API_URL);
  //     if (!response.ok) {
  //       throw new Error(`Response status: ${response.status}`);
  //     }
  //     const json = await response.json();
  //     setPhotos(json.slice(0, 6)); 
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

  // // Fetch photos on component mount
  // useEffect(() => {
  //   getPhotos();
  // }, []);

  // // Filter photos based on search input
  // useEffect(() => {
  //   setFilteredPhotos(
  //     photos.filter((photo) =>
  //       photo.title.toLowerCase().includes(search.toLowerCase())
  //     )
  //   );
  // }, [search, photos]);

  // return (
  //   <div
  //     className="main-photo"
  //     style={{ backgroundColor: "beige", height: "700px", padding: "20px",  }}
  //   >
  //     <label htmlFor="title">Search Photo by Title:</label>
  //     <input
  //       type="text"
  //       id="title"
  //       value={search}
  //       onChange={(e) => setSearch(e.target.value)}
  //       placeholder="Type photo title..."
  //       style={{ marginLeft: "10px", padding: "5px", }}
  //     />
  //     <div style={{ marginTop: "20px",display:'flex' }}>
  //       {filteredPhotos.map((photo) => (
  //         <div key={photo.id} style={{ marginBottom: "10px" }}>
  //           <img
  //             src={photo.thumbnailUrl}
  //             alt={photo.title}
  //             style={{ width: "100px", height: "100px", marginRight: "10px" }}
  //           />
  //           <span>{photo.title}</span>
  //         </div>
  //       ))}
  //     </div>
  //   </div>
  //);

  
}

export default Home;


//video



