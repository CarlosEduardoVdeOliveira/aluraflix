import styles from "./TextArea.module.css"

export const TextArea = ({placeholder}) =>{
  return(
    <textarea placeholder={placeholder}></textarea>
  )
}