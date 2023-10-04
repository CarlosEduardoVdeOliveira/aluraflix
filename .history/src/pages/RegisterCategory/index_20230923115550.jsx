import {Button} from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Table } from "../../components/Table"
import {categories} from '../../json/db.json'
export const RegisterCategory = () => {
  return (
    <>
      <form>
        <Input type="text" placeholder="Nome" />
        <TextArea placeholder='Descrição'></TextArea>
        <Input type="color" placeholder="Cor"/>
        <Input type="text" placeholder="Código de segurança"/>
        <Button
          bgColor="#2A7AE4"
          color="#F5F5F5"
          borderColor='1px solid #2A7AE4'
          >
          Salvar
        </Button>
        <Button
          bgColor="#9E9E9E"
          color="#000000"
          borderColor='1px solid #9E9E9E'
          >
          Limpar
        </Button>
      </form>
      {
        
          <Table />
      
      }
    </>
  )
}
