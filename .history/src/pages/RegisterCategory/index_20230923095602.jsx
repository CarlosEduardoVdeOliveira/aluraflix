import {Button} from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
export const RegisterCategory = () => {
  return (
    <form>
      <Input type="text" placeholder="Nome" />
      <TextArea placeholder='Descrição'></TextArea>
      <Input type="color" placeholder="Nome"/>
      <Input type="text" placeholder="Nome"/>
      <Button bgColor="#2A7AE4" color="#F5F5F5" borderColor='1px solid #2A7AE4'>Salvar</Button>
    </form>
  )
}
