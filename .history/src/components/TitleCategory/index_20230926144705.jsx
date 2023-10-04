/* eslint-disable react/prop-types */
import styles from "./TitleCategory.module.css"
export const TitleCategory = ({children, bgColor, color}) => {
  return(
    <div 
      className={styles.container} 
      style={{
        backgroundColor: bgColor,
        color: color
      }}
    >
      {children}
    </div>
  )
}
