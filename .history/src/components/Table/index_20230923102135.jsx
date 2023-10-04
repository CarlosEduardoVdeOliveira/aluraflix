import styles from './Table.module.css'
import { DeleteOutline } from '@mui/icons-material'

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
          <td>Editar</td>
          <td><DeleteOutline /></td>
        </tr>
      </tbody>
    </table>
  )
}