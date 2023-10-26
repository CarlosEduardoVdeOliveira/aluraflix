/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';
const VideoContext = createContext();
const baseUrlApi = "https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api"

export function VideoContextProvider({children}) {
  const [vidoes, setVideos] = useState([{}])
  
    useEffect(()=>{
      fetch(`${baseUrlApi}/videos`)
      .then(res => res.json())
      .then(data => setVideos(data))
      .catch(error => console.error("Erro durante a fetch:", error));
    },[])
  
  return (
    <VideoContext.Provider value={{ vidoes,  setVideos }}>
      {children}
    </VideoContext.Provider>
  );
}

export default VideoContext

