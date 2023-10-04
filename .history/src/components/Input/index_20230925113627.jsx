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
export const Select = ({value}) => {
  return(
    <>
      <select>
        <option>{value}</option>
      </select>
    </>
  )
}