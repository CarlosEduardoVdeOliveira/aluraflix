/* eslint-disable react/prop-types */
import styles from './Input.module.css'

export const Input = ({placeholder, type, id}) => {
  return(
    
      <label id={id}>
        <input className={styles.input} type={type} placeholder={placeholder} />
      </label>
        
    
  )
}