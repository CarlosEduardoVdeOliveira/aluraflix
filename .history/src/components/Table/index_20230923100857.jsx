import styles from './Table.module.css'

export const Table = () => {
  return(
    <table>
      <thead>
        <td>
          <tr>Nome</tr>
          <tr>Descrição</tr>
          <tr>Editar</tr>
          <tr>Remover</tr>
        </td>
      </thead>
      <tbody></tbody>
    </table>
  )
}