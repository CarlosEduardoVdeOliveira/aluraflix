/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import {categories} from '../../json/db.json'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@emotion/react';

export const Table = () => {
  const theme = useTheme()
  console.log(theme);
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
              <IconButton aria-label="edit" >
                <EditIcon theme={} />
              </IconButton>
            </td>
            <td> 
              <IconButton aria-label="delete" >
                <DeleteIcon />
              </IconButton>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}