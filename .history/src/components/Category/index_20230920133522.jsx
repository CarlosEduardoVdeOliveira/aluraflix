import styles from "./TitleCategory"
// eslint-disable-next-line react/prop-types
function TitleCategory({children}) {
  return(
    <div className={styles.container}>
      {children}
    </div>
  )
}

export default TitleCategory