/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input, Select, TextArea } from "../../components/Inputs";
import styles from './Register.module.css'
import {categories, videos} from '../../json/db.json'
import { useState } from "react";

export const RegisterVideo = () => {
  const [title, setTitle] = useState('');
  const [videoLink, setVideoLink] = useState('');
  const [imageLink, setImageLink] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [codigo, setCodigo] = useState('');
  const [videosState, setVideosState] = useState(videos);
  console.log(videosState);
  return (
    <form onSubmit={
          (event) => {
            event.preventDefault()
            const newVideo = ({title, videoLink, imageLink, category, description, codigo})
            console.log(setVideosState([...videosState, newVideo]))
          } 
        }
      className={styles.container}
    >
      <h2>Novo vídeo</h2>
      <Input 
        value={title}
        onChange={(event)=> setTitle(event.target.value)}
        placeholder="Título"
        type="text"
      />
      <Input 
        value={videoLink}
        onChange={(event)=> setVideoLink(event.target.value)}
        placeholder="Link do vídeo"
        type="text"
      />
      <Input 
        value={imageLink}
        onChange={(event)=> setImageLink(event.target.value)}
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
