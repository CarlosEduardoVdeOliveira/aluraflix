/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {createContext, useEffect, useState} from 'react';

const VideoContext = createContext();

const baseUrlApi = "https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api/videos"
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

  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { name, link, thumbnail, category, description, codigo: id };

    fetch(baseUrlApi, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
    .then(res => res.json())
    .then(data => {
      setVideos([...videos, data]);
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
    <VideoContext.Provider value={{
      videos, 
      setVideos,
      handleSubmit,
      name, setName,
      link, setLink,
      thumbnail, setThumbnail,
      category, setCategory,
      description, setDescription,
      codigo, setCodigo
      }}>
      {children}
    </VideoContext.Provider>
  );
}

export default VideoContext

