import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import { DeleteOutline, ClipboardOutline } from '@mui/icons-material'

export const Table = () => {
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
          <td>Back End</td>
          <td>Todos os vídeo que estou usando para estudar Back End</td>
          <td> 
            <IconButton aria-label="update">
              <ClipboardOutline />
            </IconButton>
          </td>
          <td> 
            <IconButton aria-label="delete">
              <DeleteOutline />
            </IconButton>
          </td>
        </tr>
      </tbody>
    </table>
  )
}