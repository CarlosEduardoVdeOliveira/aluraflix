/* eslint-disable react/jsx-key */
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input, Select, TextArea } from "../../components/Inputs";
import styles from './Register.module.css'
import {categories} from '../../json/db.json'

export const RegisterVideo = () => {
  return (
    <form className={styles.container}>
      <h2>Novo vídeo</h2>
      <Input placeholder="Título" type="text" />
      <Input placeholder="Link do vídeo" type="text" />
      <Input placeholder="Link da imagem do vídeo" type="text" />
      <Select categories={categories} />
      <TextArea placeholder="Descrição"></TextArea>
      <Input placeholder="Código de segurança" type="text" />
      <div className={styles.groupButton}>
        <div className={styles.subGroupButton}>
          <Button
            bgColor="#2A7AE4"
            color="#F5F5F5"
            borderColor="1px solid #2A7AE4"
          >
            Salvar
          </Button>
          <Button
            bgColor="#9E9E9E"
            color="#191919"
            borderColor="1px solid #9E9E9E"
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
