import { useState } from "react"

import {Button} from "../../components/Button"
import { Input, TextArea } from "../../components/Inputs"
import { Table } from "../../components/Table"
import styles from './Register.module.css'
import {categories} from '../../../db.json'
import CategoryContext, { CategoryContextProvider } from "../../contexts/cotextCategory"

export const RegisterCategory = () => {
  const [name, setName] = useState('')
  const [color, setColor] = useState('')
  const [description, setDescription] = useState('')
  const [codigo, setCodigo] = useState()
  const [categoryState, setCategoryState] = useState(categories)
  const handleSubmit = (event) => {
    event.preventDefault();
    const newCategory = { name, description, color, codigo };

    fetch("http://localhost:3000/categories", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newCategory),
    })
    .then(res => res.json())
    .then(data => {
      // Atualize o estado apenas depois de obter uma resposta bem-sucedida do servidor
      setCategoryState(prevCategories => [...prevCategories, data]);
    });
    setName('')
    setColor('')
    setDescription('')
    setCodigo("")
  }



  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Nova categoria</h2>
        <Input onChange={(event) => setName(event.target.value)} type="text" placeholder="Nome" />
        <TextArea onChange={(event) => setDescription(event.target.value)} placeholder='Descrição'></TextArea>
        <Input onChange={(event) => setColor(event.target.value)} type="color" placeholder="Cor" label={"cor"} />
        <Input onChange={(event) => setCodigo(event.target.value)} type="text" placeholder="Código de segurança"/>
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
      <CategoryContext.Consumer >
        <Table />
      </CategoryContext.Consumer>
    </div>
  )
}
