import styles from "./TitleCategory"
function TitleCategory({children}) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TitleCategory