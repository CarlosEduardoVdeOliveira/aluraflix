import {Button} from "../../components/Button";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";

export const RegisterVideo = () => {
  return (
    <form>
      <Input placeholder="Título" />
      <Input placeholder="Link do vídeo" />
      <Input placeholder="Link da imagem do vídeo" />
      <Input placeholder="Escolha uma categoria" />
      <TextArea placeholder="Descrição"></TextArea>
      <Input placeholder="Código de segurança" />
      <Button
        bgColor="#2A7AE4" 
        color="#F5F5F5"
        borderColor='1px solid #2A7AE4'
      >
        Salvar
      </Button>
      <Button
        bgColor="#9E9E9E" 
        color="#191919"
        borderColor='1px solid #9E9E9E'
      >
        Limpar
      </Button>
      <Button
        bgColor="#2A7AE4" 
        color="#F5F5F5"
        borderColor='1px solid #2A7AE4'
      >
        Nova Categoria
      </Button>
    </form>
  )
}
