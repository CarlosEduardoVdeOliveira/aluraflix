/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import {categories} from '../../json/db.json'
import { DeleteOutline, EditOutlined } from '@mui/icons-material'

export const Table = ({id}) => {
  return(
    <table className={styles.container}>
      <thead className={styles.title}>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody className={styles.content}>
        {
          categories.map(category =>(
          <tr key={category.id}>
            <td>{category.name}</td>
            <td>{category.description}</td>
            <td> 
              <IconButton aria-label="update" id={id}>
                <EditOutlined />
              </IconButton>
            </td>
            <td> 
              <IconButton aria-label="delete" id={id}>
                <DeleteOutline />
              </IconButton>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}