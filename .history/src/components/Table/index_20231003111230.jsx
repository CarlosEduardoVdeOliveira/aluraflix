/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import {categories} from '../../../db.json'
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import CategoryContext from '../../contexts/cotextCategory';
import { render } from 'react-dom';
import { UpdateCategory } from '../../pages/UpdateCategory';

export const Table = () => {
  const theme = useTheme()
  const {editCategory, deleteCategory} = useContext(CategoryContext)

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
              <IconButton aria-label="edit" onClick={(event)=>{
                event.preventDefault();
                render(<UpdateCategory />)
              }}
              >
                <EditIcon style={{ color: theme.palette.gray100 }} />
              </IconButton>
            </td>
            <td>
              <IconButton aria-label="delete"  onClick={(event)=> {
                event.preventDefault() 
                return deleteCategory(category.id)
                }}
              >
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