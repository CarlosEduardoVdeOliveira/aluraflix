import styles from './Input.module.css'

export const Input = ({placeholder, type}) => {
  return(
    <input className={styles.input} type={type} placeholder={placeholder} />
  )
}