import { useState } from "react"
import {Button} from "../../components/Button"
import { Input, TextArea } from "../../components/Inputs"
import styles from './Update.module.css'
import {categories} from '../../../db.json'
import { useParams } from "react-router-dom"
/* 
import { CategoryContextProvider } from "../../contexts/cotextCategory" */

export const UpdateCategory = () => {
  let {id} = useParams();
  console.log({id} = useParams());
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [codigo, setCodigo] = useState('')

  async function isCategory(){
    const category = await categories.find(item => item.id === id)
    return category
  }
  console.log(isCategory());
  return (
    <div className={styles.container}>
      <form>
        <h2>Editar categoria</h2>
       
        <Input value={isCategory().name} onChange={
          (event) => setName(event.target.value)
        } type="text" placeholder="Nome" />
        <TextArea value={isCategory().description} onChange={(event) => setDescription(event.target.value)} placeholder='Descrição'></TextArea>
        <Input value={isCategory().color} onChange={(event) => setColor(event.target.value)} type="color" placeholder="Cor" label={"cor"} />
        <Input value={isCategory().codigo} onChange={(event) => setCodigo(event.target.value)} type="text" placeholder="Código de segurança"/>
        <div className={styles.groupButton}>
        <Button
          bgColor="#2A7AE4"
          color="#F5F5F5"
          borderColor='1px solid #2A7AE4'
          type="submit"
          >
          Salvar
        </Button>
        </div>
      </form>
    </div>
  )
}