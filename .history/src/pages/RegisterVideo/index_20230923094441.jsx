import {Button} from "../../components/Button";
import { Input } from "../../components/Input";

export const RegisterVideo = () => {
  return (
    <form>
      <Input />
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
