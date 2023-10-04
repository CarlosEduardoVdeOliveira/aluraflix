/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import { DeleteOutline, EditOutlined } from '@mui/icons-material'

export const Table = ({name, description, id}) => {
  return(
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Editar</th>
          <th>Remover</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{name}</td>
          <td>{description}</td>
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
      </tbody>
    </table>
  )
}