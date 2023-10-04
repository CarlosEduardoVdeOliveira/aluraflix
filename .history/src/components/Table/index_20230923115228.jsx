/* eslint-disable react/prop-types */
import { IconButton } from '@mui/material'
import styles from './Table.module.css'
import { DeleteOutline, EditOutlined } from '@mui/icons-material'

export const Table = ({name, description, id}) => {
  return(
    <table>
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