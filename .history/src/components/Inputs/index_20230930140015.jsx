/* eslint-disable react/prop-types */
import styles from './Input.module.css'

export const Input = ({placeholder, type, value, onChange}) => {
  return(
    <>
      
      <input 
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}/>
    </>
  )
}
export const TextArea = ({placeholder, value, onChange}) =>{
  return(
    <textarea value={value} className={styles.textarea} placeholder={placeholder} onChange={onChange}></textarea>
  )
}

export const Select = ({categories, value, onChange}) => {
  return(
    <>
      <select value={value} className={styles.input} name={categories} onChange={onChange}>
      {
          categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))
        }
      </select>
    </>
  )
}