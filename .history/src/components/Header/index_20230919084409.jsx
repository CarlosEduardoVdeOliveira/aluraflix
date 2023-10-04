import styles from './Header.module.css'
import logo from '../../assets/logo.png'
import { Button } from '@mui/material'


const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined">Novo vídeo</Button>
    </header>
  )
}

export default Header