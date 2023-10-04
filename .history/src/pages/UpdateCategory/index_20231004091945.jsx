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

  function isCategory(){
    return categories.find( item => item.id === categoryId)
  }
  const [name, setName] = useState(isCategory().name)
  const [color, setColor] = useState(isCategory().color)
  const [description, setDescription] = useState(isCategory().description)
  const [codigo, setCodigo] = useState(isCategory().codigo)
  const [updateCategoryState, setUpdateCategoryState] = useState(categories)

  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = { name, description, color, codigo };

    fetch(`http://localhost:3000/categories/${categoryId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory),
    })
    .then(res => res.json())
    .then(data => {
      setUpdateCategoryState(prevCategories => [...prevCategories, data]);
    });
    setName('')
    setColor('')
    setDescription('')
    setCodigo("")
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Editar categoria</h2>
        <Input value={name} onChange={
          (event) => setName(event.target.value)
        } type="text" placeholder="Nome" />
        <Input value={color} onChange={(event) => setColor(event.target.value)} type="color" placeholder="Cor" label={"cor"} />
        <TextArea value={description} onChange={(event) => setDescription(event.target.value)} placeholder='Descrição'></TextArea>
        <Input value={codigo} onChange={(event) => setCodigo(event.target.value)} type="text" placeholder="Código de segurança"/>
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
