/* eslint-disable react/prop-types */
import styles from './Input.module.css'

export const Input = ({placeholder, type, value, label}) => {
  return(
    <>
      <label>{label}</label>
      <input className={styles.input} type={type} value={value} placeholder={placeholder} />
    </>
  )
}
export const TextArea = ({placeholder}) =>{
  return(
    <textarea className={styles.textarea} placeholder={placeholder}></textarea>
  )
}

export const Select = ({categories}) => {
  return(
    <>
      <select className={styles.input} name={categories}>
      {
          categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))
        }
      </select>
    </>
  )
}