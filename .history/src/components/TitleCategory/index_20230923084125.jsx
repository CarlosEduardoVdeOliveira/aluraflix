import styles from "./TitleCategory.module.css"
// eslint-disable-next-line react/prop-types
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
