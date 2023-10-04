/* eslint-disable react/prop-types */
import styles from './Button.module.css'

export const Button = ({children, bgColor, borderColor, color, onClick, id}) => {
  return(
    <button className={styles.button} 
      style={{
        background:bgColor, 
        border:borderColor, 
        color:color
      }}
      onClick={onClick}
      id={id}
    >
      {children}
    </button>
  )
}
