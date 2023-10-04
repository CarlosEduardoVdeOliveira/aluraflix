/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import {categories} from '../../json/db.json'
import { EditOutlined } from '@mui/icons-material'
import DeleteIcon from '@mui/icons-material/Delete';

export const Table = () => {
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
              <IconButton aria-label="update" >
                <EditOutlined color='#FFF' />
              </IconButton>
            </td>
            <td> 
              <IconButton aria-label="delete" >
                <DeleteIcon color="gray100"/>
              </IconButton>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}