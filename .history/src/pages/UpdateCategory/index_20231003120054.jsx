import { useState } from "react"
import {Button} from "../../components/Button"
import { Input, TextArea } from "../../components/Inputs"
import styles from './Update.module.css'
import {categories} from '../../../db.json'
import { useParams } from "react-router-dom"
/* 
import { CategoryContextProvider } from "../../contexts/cotextCategory" */

export const UpdateCategory = () => {
  let {id} = useParams() 
/*   const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [codigo, setCodigo] = useState('') */
  function isCategory(categoryId){
    if (id === categoryId) {
      for(let i =0; i<categories.length; i++){
        console.log(categories[i]);
      }
    }
  }
  console.log(isCategory());
  return (
    <div className={styles.container}>
      <form>
        <h2>Editar categoria</h2>
       
        <Input value={category.name} onChange={
          (event) => setName(event.target.value)
        } type="text" placeholder="Nome" />
        <TextArea value={category.description} onChange={(event) => setDescription(event.target.value)} placeholder='Descrição'></TextArea>
        <Input value={category.color} onChange={(event) => setColor(event.target.value)} type="color" placeholder="Cor" label={"cor"} />
        <Input value={category.codigo} onChange={(event) => setCodigo(event.target.value)} type="text" placeholder="Código de segurança"/>
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
