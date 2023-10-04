import { Button } from '@mui/material'
import logo from '../../assets/logo.png'
import styles from './Header.module.css'

const Header = () => {
  return (
    <header className={styles.container}>
      <img src={logo} alt='Logo do aluraflix' />
      <Button variant="outlined" size={width < '570px' ? "medium" : 'small'}>Novo vídeo</Button>
    </header>
  )
}

export default Header