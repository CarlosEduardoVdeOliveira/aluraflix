import { useState } from "react"
import {Button} from "../../components/Button"
import { Input, TextArea } from "../../components/Inputs"
import styles from './Update.module.css'
import {categories} from '../../../db.json'
import { useParams } from "react-router-dom"
/* 
import { CategoryContextProvider } from "../../contexts/cotextCategory" */

export const UpdateCategory = () => {
  let {categoryId} = useParams();
  console.log(useParams());
  console.log(categoryId);
  function isCategory(){
    return categories.find( item => item.id === categoryId)
  }
  const [name, setName] = useState(isCategory().name)
  const [color, setColor] = useState(isCategory().color)
  const [description, setDescription] = useState(isCategory().description)
  const [codigo, setCodigo] = useState(isCategory().codigo)

  console.log("Tudo ok",name,
    color,
    description,
    codigo);

  return (
    <div className={styles.container}>
      <form>
        <h2>Editar categoria</h2>
        <Input onChange={
          (event) => setName(event.target.value)
        } type="text" placeholder="Nome" />
        <TextArea onChange={(event) => setDescription(event.target.value)} placeholder='Descrição'></TextArea>
        <Input onChange={(event) => setColor(event.target.value)} type="color" placeholder="Cor" label={"cor"} />
        <Input onChange={(event) => setCodigo(event.target.value)} type="text" placeholder="Código de segurança"/>
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
