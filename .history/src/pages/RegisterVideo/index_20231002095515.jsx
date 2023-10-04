/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input, Select, TextArea } from "../../components/Inputs";
import styles from './Register.module.css'
import {categories, videos} from '../../../db.json'
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const RegisterVideo = () => {
  const id = uuidv4()
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [category, setCategory] = useState(1);
  const [description, setDescription] = useState('');
  const [codigo, setCodigo] = useState('');
  
  const [videosState, setVideosState] = useState(videos);
  /* const [video, setVideo] = useState({}); */
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { name, link, thumbnail, category, description, codigo: id };

    fetch("http://localhost:3000/videos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
    .then(res => res.json())
    .then(data => {
      // Atualize o estado apenas depois de obter uma resposta bem-sucedida do servidor
      setVideosState(prevVideos => [...prevVideos, data]);
    });
  }
  
  return (
    <form 
      onSubmit={handleSubmit}
      className={styles.container}
    >
      <h2>Novo vídeo</h2>
      <Input 
        value={name}
        onChange={(event)=> setName(event.target.value)}
        placeholder="Título"
        type="text"
      />
      <Input 
        value={link}
        onChange={(event)=> setLink(event.target.value)}
        placeholder="Link do vídeo"
        type="text"
      />
      <Input 
        value={thumbnail}
        onChange={(event)=> setThumbnail(event.target.value)}
        placeholder="Link da imagem do vídeo" 
        type="text"
      />
      <Select
        value={category}
        onChange={(event)=> setCategory(event.target.value)}
        categories={categories}
      />
      <TextArea
        value={description} 
        onChange={(event)=> setDescription(event.target.value)} 
        placeholder="Descrição"
      />
      <Input
        value={codigo}
        onChange={(event)=> setCodigo(event.target.value)}
        placeholder="Código de segurança"
        type="text"
      />
      <div className={styles.groupButton}>
        <div className={styles.subGroupButton}>
          <Button
            bgColor="#2A7AE4"
            color="#F5F5F5"
            borderColor="1px solid #2A7AE4"
            type='submit'
          >
            Salvar
          </Button>
          <Button
            bgColor="#9E9E9E"
            color="#191919"
            borderColor="1px solid #9E9E9E"
            type="reset"
          >
            Limpar
          </Button>
        </div>
        <Link to="/register-category">
          <Button
            bgColor="#2A7AE4"
            color="#F5F5F5"
            borderColor="1px solid #2A7AE4"
            >
            Nova Categoria
          </Button>
        </Link>
      </div>
    </form>
  );
};
