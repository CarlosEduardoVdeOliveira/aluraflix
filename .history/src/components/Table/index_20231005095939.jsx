/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useTheme } from '@emotion/react';
import { useContext } from 'react';
import CategoryContext from '../../contexts/cotextCategory';
import { Link } from 'react-router-dom';

export const Table = () => {
  const theme = useTheme()
  const {deleteCategory, categories, listCategories} = useContext(CategoryContext)
  console.log(listCategories());
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
              <Link to={`/update-category/${category.id}`}
              >
                <EditIcon style={{ color: theme.palette.gray100 }} />
              </Link>
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