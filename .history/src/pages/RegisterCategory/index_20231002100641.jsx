import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';

import {Button} from "../../components/Button"
import { Input, TextArea } from "../../components/Inputs"
import { Table } from "../../components/Table"
import styles from './Register.module.css'

export const RegisterCategory = () => {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [color, setColor] = useState('')
  const [categoryState, setCategoryState] = useState({})
  const id = uuidv4();
  const handleSubmit = (event) => {
    event.preventDefault();
    const newVideo = { name, description, color, id };

    fetch("http://localhost:3000/videos", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newVideo),
    })
    .then(res => res.json())
    .then(data => {
      // Atualize o estado apenas depois de obter uma resposta bem-sucedida do servidor
      setCategoryState(prevVideos => [...prevVideos, data]);
    });
    setName('')
    setColor('')
    setDescription('')
  }
  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit}>
        <h2>Nova categoria</h2>
        <Input type="text" placeholder="Nome" />
        <TextArea placeholder='Descrição'></TextArea>
        <Input type="color" placeholder="Cor" value="#2A7AE4" label={"cor"} />
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
