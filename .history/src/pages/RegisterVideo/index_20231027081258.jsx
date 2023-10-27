/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input, Select, TextArea } from "../../components/Inputs";
import styles from './Register.module.css'
import {categories} from '../../../db.json'
import { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import CategoryContext from "../../contexts/contextCategory";

export const RegisterVideo = () => {
  const id = uuidv4()
  const [name, setName] = useState('');
  const [link, setLink] = useState('');
  const [thumbnail, setThumbnail] = useState('');
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState('');
  const [codigo, setCodigo] = useState('');
  const [videosState, setVideosState] = useState({});
  const {categories} = useContext(CategoryContext)
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { name, link, thumbnail, description, codigo: id };

    fetch("https://my-json-server.typicode.com/carloseduardovdeoliveira/aluraflix-api/categories", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
    .then(res => res.json())
    .then(data => {
      setVideosState(prevVideos => [...prevVideos, data]);
      console.log(data);
    });
    setName('')
    setLink('')
    setThumbnail('')
    setCategory("")
    setDescription('')
    setCodigo('')

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


/* 
,
    {
      "id": 2,
      "name": "Crie componentes DESSA FORMA no React (Pattern de composição)",
      "link": "https://www.youtube.com/watch?v=oPOKpSFqy-I&ab_channel=Rocketseat",
      "thumbnail": "https://i.ytimg.com/vi/oPOKpSFqy-I/maxresdefault.jpg",
      "category": "Front End",
      "description": "Dentro da nossa aplicação, por mais simples que ela seja, os componentes podem ter um número absurdo de customizações (que eu vou te mostrar no vídeo). 😂"
    },
    {
      "id": 3,
      "name": "Homem-Aranha - Sem Volta Para Casa",
      "link": "https://www.youtube.com/watch?v=hHM-hr9q4mo&ab_channel=Rocketseat",
      "thumbnail": "https://i.ytimg.com/vi/hHM-hr9q4mo/maxresdefault.jpg",
      "category": "Front End",
      "description": "Descrição qualquer"
    },
    {
      "id": 4,
      "name": "Como sair do ZERO em Node.js",
      "link": "https://www.youtube.com/watch?v=hHM-hr9q4mo&ab_channel=Rocketseat",
      "thumbnail": "https://i.ytimg.com/vi/hHM-hr9q4mo/maxresdefault.jpg",
      "category": "Back End",
      "description": "O que você precisa saber para criar a sua primeira aplicação em Node.js?"
    },
    {
      "id": 5,
      "name": "Guia de Carreira JAVA",
      "link": "https://www.youtube.com/watch?v=TUBqH9zVs3M&ab_channel=Alura",
      "thumbnail": "https://i.ytimg.com/vi/TUBqH9zVs3M/maxresdefault.jpg",
      "category": "Back End",
      "description": "Com o Guia de Carreira Java, saiba o que é e para que serve o Java e descubra o passo a passo para sair do INICIANTE ao AVANÇADO. "
    }
*/