/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import {categories} from '../../../db.json'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@emotion/react';

export const Table = ({onClick}) => {
  const theme = useTheme()
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
              <IconButton aria-label="edit"  onClick={onClick} >
                <EditIcon style={{ color: theme.palette.gray100 }} />
              </IconButton>
            </td>
            <td>
              <IconButton aria-label="delete" onClick={onClick} >
                <DeleteIcon style={{ color: theme.palette.gray100 }}/>
              </IconButton>
            </td>
          </tr>
          ))
        }
      </tbody>
    </table>
  )
}