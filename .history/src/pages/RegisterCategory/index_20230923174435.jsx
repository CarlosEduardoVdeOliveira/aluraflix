import {Button} from "../../components/Button"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { Table } from "../../components/Table"
import styles from './Register.module.css'

export const RegisterCategory = () => {
  return (
    <div className={styles.container}>
      <form >
        <h2>Nova categoria</h2>
        <Input type="text" placeholder="Nome" />
        <TextArea placeholder='Descrição'></TextArea>
        <Input type="color" placeholder="Cor" value="#2A7AE4" />
        <Input type="text" placeholder="Código de segurança"/>
        <div className={styles.groupButton}>
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
        </div>
      </form>
      <Table />
    </div>
  )
}
