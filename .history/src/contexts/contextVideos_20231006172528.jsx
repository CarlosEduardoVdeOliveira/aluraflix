/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
const VideoContext = createContext();
const baseUrlApi = "https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api/videos"

export function VideoContextProvider({children}) {
  const [videos, setVideos] = useState([{}])
  
    useEffect(()=>{
      fetch(`${baseUrlApi}`)
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(error => console.error("Erro durante a fetch:", error));
    },[])
  
  return (
    <VideoContext.Provider value={{ videos,  setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}

export default VideoContext

