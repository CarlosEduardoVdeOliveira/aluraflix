import styles from "./TitleCategory.module.css"
// eslint-disable-next-line react/prop-types
function TitleCategory({children, bgColor, color}) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TitleCategory