import styles from './Button.module.css'
// eslint-disable-next-line react/prop-types
function Button({children, bgColor, borderColor, color}) {
  return(
    <button className={styles.button} 
      style={{
        background:bgColor, 
        border:borderColor, 
        color:color
      }}
    >
      {children}
    </button>
  )
}

export default Button