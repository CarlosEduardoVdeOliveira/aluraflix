// eslint-disable-next-line react/prop-types
import styles from './Button.module.css'
function Button({children, bgColor, borderColor}) {
  return(
    <button className={styles.button} style={{background:bgColor, border:borderColor}}>
      {children}
    </button>
  )
}

export default Button