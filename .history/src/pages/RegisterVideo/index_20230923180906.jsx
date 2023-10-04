import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import styles from './Register.module.css'

export const RegisterVideo = () => {
  return (
    <form className={styles.container}>
      <h2>Novo vídeo</h2>
      <Input placeholder="Título" type="text" />
      <Input placeholder="Link do vídeo" type="text" />
      <Input placeholder="Link da imagem do vídeo" type="text" />
      <Input placeholder="Escolha uma categoria" type="text" />
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
        <Button
          bgColor="#2A7AE4"
          color="#F5F5F5"
          borderColor="1px solid #2A7AE4"
        >
          Nova Categoria
        </Button>
      </div>
    </form>
  );
};
