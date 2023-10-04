import { Link } from 'react-router-dom'
import logo from '../../assets/logo.png'
import styles from './Footer.module.css'
function Footer() {
  return (
    <footer className={styles.container}>
      <Link to='/'>
        <img src={logo} alt="Logo do aluraflix" />
      </Link>
    </footer>
  )
}

export default Footer