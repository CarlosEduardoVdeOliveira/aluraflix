/* eslint-disable react/prop-types */
import styles from './Input.module.css'

export const Input = ({placeholder, type, value}) => {
  return(
    <>
      <input 
        className={styles.input}
        type={type}
        value={value}
        placeholder={placeholder}
        />
    </>
  )
}
export const TextArea = ({placeholder, value}) =>{
  return(
    <textarea
      value={value}
      className={styles.textarea}
      placeholder={placeholder}
      
    />
  )
}

export const Select = ({categories, value}) => {
  return(
    <>
      <select
        value={value}
        className={styles.input}
        name={categories}
        
      >
      {
          categories.map(category => (
            <option key={category.id} value={category.name}>{category.name}</option>
          ))
        }
      </select>
    </>
  )
}