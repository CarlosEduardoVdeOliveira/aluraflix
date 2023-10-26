/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useContext, useEffect, useState} from 'react';
import CategoryContext from './contextCategory';
const VideoContext = createContext();
const baseUrlApi = "https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api/videos"
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export function VideoContextProvider({children}) {
  const [videos, setVideos] = useState([{}])

  const id = uuidv4()
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState('');
  const [codigo, setCodigo] = useState('');
  const [videosState, setVideosState] = useState(videos);
  const {categories} = useContext(CategoryContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { name, link, thumbnail, category, description, codigo: id };

    fetch("https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api/videos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
    .then(res => res.json())
    .then(data => {
      setVideosState(prevVideos => [...prevVideos, data]);
    });
    setName('')
    setLink('')
    setThumbnail('')
    setCategory("Front End")
    setDescription('')
    setCodigo('')

  }
  
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

