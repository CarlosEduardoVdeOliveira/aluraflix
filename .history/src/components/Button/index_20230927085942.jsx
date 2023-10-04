/* eslint-disable react/prop-types */
import styles from './Button.module.css'

export const Button = ({children, bgColor, borderColor, color ,title, onClick, id}) => {
  return(
    <button className={styles.button} 
      style={{
        background:bgColor, 
        border:borderColor, 
        color:color
      }}
      onClick={onClick}
      id={id}
      title={title}
    >
      {children}
    </button>
  )
}
