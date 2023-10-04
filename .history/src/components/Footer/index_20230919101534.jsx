import logo from '../../assets/logo.png'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.container}>
      <img src={logo} alt="Logo do aluraflix" />
    </footer>
  )
}

export default Footer